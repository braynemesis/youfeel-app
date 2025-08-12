import React from 'react';
import { FiCloud, FiMessageSquare } from 'react-icons/fi';

const AIInsights = ({ analysis }) => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <FiCloud className="text-youtube-red" />
        Insights da IA
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <FiMessageSquare size={16} />
            Resumo do Conteúdo
          </h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {analysis?.contentSummary || 'Resumo não disponível'}
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
            💭 Opinião do Público
          </h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {analysis?.publicOpinion || 'Análise de opinião não disponível'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
