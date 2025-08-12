import React from 'react';

const VideoEmbed = ({ videoId, title }) => {
  return (
    <div className="card h-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Vídeo Analisado
      </h3>
      
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoEmbed;
