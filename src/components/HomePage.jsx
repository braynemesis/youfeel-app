import React, { useState } from 'react';
import { FiPlay, FiSearch } from 'react-icons/fi';
import axios from 'axios';

const HomePage = ({ onAnalyze, onLoading }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!videoUrl.trim()) {
      setError('Por favor, insira uma URL válida do YouTube');
      return;
    }

    setError('');
    setIsLoading(true);
    onLoading();

    try {
      const apiUrl = import.meta.env.PROD 
        ? '/api/analyze' 
        : 'http://localhost:3001/api/analyze';
        
      const response = await axios.post(apiUrl, {
        videoUrl: videoUrl.trim()
      });

      onAnalyze(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error || 
        'Erro ao analisar o vídeo. Verifique a URL e tente novamente.'
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-youtube-red rounded-2xl flex items-center justify-center">
              <FiPlay className="text-white" size={24} />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              YouFeel
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Análise de sentimentos e engajamento de vídeos do YouTube
          </p>
          
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Cole a URL de qualquer vídeo do YouTube e descubra o que as pessoas realmente 
            pensam através da análise inteligente dos comentários.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Cole a URL ou ID do vídeo do YouTube aqui..."
              className="input-field pl-12 text-lg h-16"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !videoUrl.trim()}
            className="btn-primary w-full h-16 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Analisando...
              </div>
            ) : (
              <>
                <FiPlay size={20} />
                Analisar Vídeo
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Exemplos de URLs válidas:
          </p>
          <div className="space-y-2 text-xs text-gray-400 dark:text-gray-500">
            <p>https://www.youtube.com/watch?v=dQw4w9WgXcQ</p>
            <p>https://youtu.be/dQw4w9WgXcQ</p>
            <p>dQw4w9WgXcQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
