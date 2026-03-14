import React from 'react'
import { PhotoCard } from '../index'
function PhotoGrid({ photos , favourites, dispatch }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          favourites={favourites}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default PhotoGrid