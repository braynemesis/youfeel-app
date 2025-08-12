import React from 'react';
import { FiTag } from 'react-icons/fi';

const KeywordsCloud = ({ keywords = [] }) => {
  const getRandomSize = () => {
    const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const getRandomColor = () => {
    const colors = [
      'text-blue-500',
      'text-green-500',
      'text-purple-500',
      'text-pink-500',
      'text-indigo-500',
      'text-yellow-600',
      'text-red-500',
      'text-teal-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <FiTag className="text-youtube-red" />
        Palavras-chave Principais
      </h3>
      
      {keywords.length > 0 ? (
        <div className="flex flex-wrap gap-3 justify-center items-center min-h-[200px]">
          {keywords.slice(0, 20).map((keyword, index) => (
            <span
              key={index}
              className={`${getRandomSize()} ${getRandomColor()} font-medium hover:scale-110 transition-transform duration-200 cursor-pointer`}
            >
              {keyword}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-48 text-gray-500 dark:text-gray-400">
          <div className="text-center">
            <FiTag size={48} className="mx-auto mb-2 opacity-50" />
            <p>Nenhuma palavra-chave encontrada</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeywordsCloud;
