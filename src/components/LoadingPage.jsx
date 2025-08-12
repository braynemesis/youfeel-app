import React, { useEffect, useState } from 'react';

const LoadingPage = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "🔍 Buscando comentários...",
    "🧠 Analisando sentimentos...",
    "📊 Processando dados...",
    "✨ Gerando insights...",
    "🎯 Finalizando análise..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6">
            <div className="w-full h-full border-4 border-youtube-red border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Analisando seu vídeo...
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-all duration-500">
              {messages[currentMessage]}
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === (currentMessage % 4) ? 'bg-youtube-red' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  style={{
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Isso pode levar alguns segundos...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
