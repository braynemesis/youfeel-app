import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize APIs
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Helper function to extract video ID from URL
function extractVideoId(url) {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : url; // Return the ID directly if no match (assuming it's already an ID)
}

// Helper function to list available models (for debugging)
async function listAvailableModels() {
  try {
    const models = await genAI.listModels();
    console.log('Available models:');
    models.forEach(model => {
      if (model.supportedGenerationMethods.includes('generateContent')) {
        console.log(`- ${model.name}`);
      }
    });
  } catch (error) {
    console.error('Error listing models:', error.message);
  }
}

// Helper function to analyze sentiment with Gemini
async function analyzeSentiment(comments) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
    Analise o sentimento dos seguintes comentários de YouTube e retorne um JSON com a seguinte estrutura:
    {
      "sentiments": [
        {"comment": "texto do comentário", "sentiment": "Positivo|Neutro|Negativo", "score": 0.8}
      ],
      "summary": {
        "positive": 45,
        "neutral": 30,
        "negative": 25
      },
      "keywords": ["palavra1", "palavra2", "palavra3"],
      "generalSentiment": "Positivo|Neutro|Negativo",
      "contentSummary": "Resumo do que as pessoas estão comentando sobre o vídeo",
      "publicOpinion": "Opinião geral do público sobre o vídeo"
    }

    Comentários:
    ${comments.map(comment => `"${comment.textDisplay}"`).join('\n')}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Try to parse JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('Invalid JSON response from Gemini');
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    
    // Se for erro 404 do modelo, tentar listar modelos disponíveis
    if (error.message.includes('404') || error.message.includes('not found')) {
      console.log('Attempting to list available models...');
      await listAvailableModels();
    }
    
    throw new Error(`Gemini API Error: ${error.message}`);
  }
}

// API Routes
app.post('/api/analyze', async (req, res) => {
  try {
    const { videoUrl } = req.body;
    
    if (!videoUrl) {
      return res.status(400).json({ error: 'Video URL is required' });
    }

    // Extract video ID
    const videoId = extractVideoId(videoUrl);
    
    // Get video details
    const videoResponse = await youtube.videos.list({
      part: ['snippet', 'statistics'],
      id: [videoId]
    });

    if (!videoResponse.data.items || videoResponse.data.items.length === 0) {
      return res.status(404).json({ error: 'Video not found' });
    }

    const videoData = videoResponse.data.items[0];

    // Get comments
    const commentsResponse = await youtube.commentThreads.list({
      part: ['snippet'],
      videoId: videoId,
      maxResults: 100,
      order: 'relevance'
    });

    const comments = commentsResponse.data.items.map(item => ({
      textDisplay: item.snippet.topLevelComment.snippet.textDisplay,
      likeCount: item.snippet.topLevelComment.snippet.likeCount,
      authorDisplayName: item.snippet.topLevelComment.snippet.authorDisplayName,
      publishedAt: item.snippet.topLevelComment.snippet.publishedAt
    }));

    // Analyze sentiment with Gemini
    const sentimentAnalysis = await analyzeSentiment(comments);

    // Prepare response
    const response = {
      video: {
        id: videoId,
        title: videoData.snippet.title,
        description: videoData.snippet.description,
        thumbnail: videoData.snippet.thumbnails.high.url,
        channelTitle: videoData.snippet.channelTitle,
        publishedAt: videoData.snippet.publishedAt,
        statistics: videoData.statistics
      },
      comments: comments,
      analysis: sentimentAnalysis,
      topComments: comments
        .sort((a, b) => b.likeCount - a.likeCount)
        .slice(0, 10)
    };

    res.json(response);
  } catch (error) {
    console.error('Error analyzing video:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

app.get('/api/health', async (req, res) => {
  try {
    const health = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      apis: {
        youtube: !!process.env.YOUTUBE_API_KEY,
        gemini: !!process.env.GEMINI_API_KEY
      }
    };

    // Testar conectividade com Gemini (opcional)
    if (process.env.GEMINI_API_KEY) {
      try {
        await listAvailableModels();
        health.apis.gemini_connection = 'OK';
      } catch (error) {
        health.apis.gemini_connection = 'ERROR';
        health.apis.gemini_error = error.message;
      }
    }

    res.json(health);
  } catch (error) {
    res.status(500).json({ 
      status: 'ERROR', 
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 YouFeel Server running on port ${PORT}`);
});
