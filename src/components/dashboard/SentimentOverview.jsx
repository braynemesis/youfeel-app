import React from 'react';
import { FiSmile, FiMeh, FiFrown } from 'react-icons/fi';

const SentimentOverview = ({ analysis }) => {
  const getSentimentEmoji = (sentiment) => {
    switch (sentiment?.toLowerCase()) {
      case 'positivo':
        return '😊';
      case 'negativo':
        return '😔';
      default:
        return '😐';
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment?.toLowerCase()) {
      case 'positivo':
        return <FiSmile className="text-green-500" size={24} />;
      case 'negativo':
        return <FiFrown className="text-red-500" size={24} />;
      default:
        return <FiMeh className="text-yellow-500" size={24} />;
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment?.toLowerCase()) {
      case 'positivo':
        return 'text-green-600 dark:text-green-400';
      case 'negativo':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-yellow-600 dark:text-yellow-400';
    }
  };

  return (
    <div className="card h-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Sentimento Geral
      </h3>
      
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">
          {getSentimentEmoji(analysis?.generalSentiment)}
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          {getSentimentIcon(analysis?.generalSentiment)}
          <span className={`text-xl font-bold ${getSentimentColor(analysis?.generalSentiment)}`}>
            {analysis?.generalSentiment || 'Neutro'}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-green-600 dark:text-green-400 flex items-center gap-2">
            <FiSmile size={16} />
            Positivos
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {analysis?.summary?.positive || 0}%
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-yellow-600 dark:text-yellow-400 flex items-center gap-2">
            <FiMeh size={16} />
            Neutros
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {analysis?.summary?.neutral || 0}%
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-red-600 dark:text-red-400 flex items-center gap-2">
            <FiFrown size={16} />
            Negativos
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {analysis?.summary?.negative || 0}%
          </span>
        </div>
      </div>

      {/* Progress bars */}
      <div className="mt-6 space-y-3">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${analysis?.summary?.positive || 0}%` }}
          ></div>
        </div>
        
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${analysis?.summary?.neutral || 0}%` }}
          ></div>
        </div>
        
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-red-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${analysis?.summary?.negative || 0}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SentimentOverview;
