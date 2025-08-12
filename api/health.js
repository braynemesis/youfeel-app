import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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
    return true;
  } catch (error) {
    console.error('Error listing models:', error.message);
    return false;
  }
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const health = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      environment: 'vercel',
      apis: {
        youtube: !!process.env.YOUTUBE_API_KEY,
        gemini: !!process.env.GEMINI_API_KEY
      }
    };

    // Test Gemini connectivity (optional)
    if (process.env.GEMINI_API_KEY) {
      try {
        const modelsAvailable = await listAvailableModels();
        health.apis.gemini_connection = modelsAvailable ? 'OK' : 'ERROR';
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
}
