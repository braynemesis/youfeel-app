import React from 'react';
import { FiHeart, FiUser, FiClock } from 'react-icons/fi';

const TopComments = ({ comments = [] }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'há 1 dia';
    if (diffDays < 30) return `há ${diffDays} dias`;
    if (diffDays < 365) return `há ${Math.floor(diffDays / 30)} meses`;
    return `há ${Math.floor(diffDays / 365)} anos`;
  };

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        🏆 Top 10 Comentários Mais Engajados
      </h3>
      
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-youtube-red"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FiUser className="text-gray-500 dark:text-gray-400" size={16} />
                  <span className="font-medium text-gray-900 dark:text-white text-sm">
                    {comment.authorDisplayName}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <FiHeart size={12} />
                    <span>{comment.likeCount || 0}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock size={12} />
                    <span>{formatDate(comment.publishedAt)}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {truncateText(comment.textDisplay)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>Nenhum comentário encontrado</p>
        </div>
      )}
    </div>
  );
};

export default TopComments;
