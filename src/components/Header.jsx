import React from 'react';
import { FiPlay, FiArrowLeft, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Header = ({ onNewAnalysis, showBackButton }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={onNewAnalysis}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-youtube-red transition-colors duration-200"
              >
                <FiArrowLeft size={20} />
              </button>
            )}
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-youtube-red rounded-lg flex items-center justify-center">
                <FiPlay className="text-white" size={16} />
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                YouFeel
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-youtube-red transition-colors duration-200"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
