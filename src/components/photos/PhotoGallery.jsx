import React from 'react'
import useFetchPhotos from '../../customHooks/useFetchPhotos'
import {PhotoGrid , SearchInput} from '../index'
function PhotoGallery() {
    const {photos, loading, error} = useFetchPhotos();
    
   if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );

  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;

  return <PhotoGrid photos={photos} />;
}

export default PhotoGallery