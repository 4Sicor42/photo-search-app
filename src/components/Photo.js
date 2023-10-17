// src/components/Photo.js
import React from 'react';

function Photo({ photo }) {
  return (
    <div className="photo">
      <img src={photo.urls.small} alt={photo.description} />
      <p>{photo.description}</p>
    </div>
  );
}

export default Photo;
