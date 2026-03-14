import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
function PhotoCard({ photo, favourites, dispatch }) {
  const [loaded, setLoaded] = useState(false);

  const isFav = favourites.includes(photo.id)

  const toggleFavourite = () => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: photo.id });
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden transform transition duration-100 hover:cursor-pointer hover:scale-105 hover:shadow-lg">
      <img
        src={photo.download_url}
        alt={photo.author}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-56 object-cover transition duration-500 ${
          loaded ? "filter-none" : "blur-lg scale-105"
        }`}
      />
      <div className="p-3 flex justify-between items-center">
        <p className="text-sm font-medium text-gray-700">{photo.author}</p>
        <button onClick={toggleFavourite}>
          <FaHeart className={` text-[22px] transition-colors duration-100  hover:scale-110 hover:cursor-pointer ${
            isFav? "text-red-600 ": "text-gray-700 hover:text-red-600" 
          }`} />
        </button>
      </div>
    </div>
  );
}


export default PhotoCard