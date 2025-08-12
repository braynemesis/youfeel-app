import React from 'react';
import { FiEye, FiThumbsUp, FiMessageCircle, FiCalendar, FiUser } from 'react-icons/fi';

const VideoMetrics = ({ video }) => {
  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        📊 Métricas do Vídeo
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
            <FiEye size={16} />
            <span className="text-sm font-medium">Visualizações</span>
          </div>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {formatNumber(video?.statistics?.viewCount)}
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-1">
            <FiThumbsUp size={16} />
            <span className="text-sm font-medium">Likes</span>
          </div>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {formatNumber(video?.statistics?.likeCount)}
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 text-youtube-red mb-1">
            <FiMessageCircle size={16} />
            <span className="text-sm font-medium">Comentários</span>
          </div>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {formatNumber(video?.statistics?.commentCount)}
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
            <FiUser size={16} />
            <span className="text-sm font-medium">Canal</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {video?.channelTitle}
          </p>
        </div>
      </div>
      
      <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
          <FiCalendar size={16} />
          <span className="text-sm font-medium">Publicado em</span>
        </div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          {formatDate(video?.publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoMetrics;
