import React from 'react';
import VideoEmbed from './dashboard/VideoEmbed';
import SentimentOverview from './dashboard/SentimentOverview';
import SentimentChart from './dashboard/SentimentChart';
import KeywordsCloud from './dashboard/KeywordsCloud';
import TopComments from './dashboard/TopComments';
import VideoMetrics from './dashboard/VideoMetrics';
import AIInsights from './dashboard/AIInsights';

const DashboardPage = ({ data, onNewAnalysis }) => {
  const { video, analysis, topComments } = data;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Análise de Sentimentos
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {video.title}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Video Embed */}
          <div className="lg:col-span-2">
            <VideoEmbed videoId={video.id} title={video.title} />
          </div>
          
          {/* Sentiment Overview */}
          <div className="lg:col-span-1">
            <SentimentOverview analysis={analysis} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* AI Insights */}
          <AIInsights analysis={analysis} />
          
          {/* Video Metrics */}
          <VideoMetrics video={video} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sentiment Chart */}
          <SentimentChart analysis={analysis} />
          
          {/* Keywords Cloud */}
          <KeywordsCloud keywords={analysis.keywords} />
        </div>

        {/* Top Comments */}
        <TopComments comments={topComments} />

        <div className="text-center mt-12">
          <button
            onClick={onNewAnalysis}
            className="btn-primary"
          >
            Analisar Outro Vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
