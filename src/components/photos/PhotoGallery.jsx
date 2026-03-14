import React, { useCallback, useMemo, useState } from 'react'
import useFetchPhotos from '../../customHooks/useFetchPhotos'
import {PhotoGrid , SearchInput} from '../index'
function PhotoGallery() {
    const {photos, loading, error} = useFetchPhotos();
    const [search, setSearch] = useState("");

    const searchHandler = useCallback((e)=>{
      setSearch(e.target.value)
    },[]);
    const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);
    

   return (
    <section className="py-4 md:py-8 ">
      <h1 className=" text-3xl md:text-6xl font-bold text-[#4E9358] text-center py-8 ">Photo Gallery</h1> 
      <SearchInput value={search} onChange={searchHandler} />
      <div className="mt-4">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 py-10">
            <p>Failed to load photos: {error}</p>
          </div>
        )}

       
        {!loading && !error && filteredPhotos.length > 0 && (
          <PhotoGrid photos={filteredPhotos} />
        )}

        
        {!loading && !error && filteredPhotos.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No photos match your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default PhotoGallery