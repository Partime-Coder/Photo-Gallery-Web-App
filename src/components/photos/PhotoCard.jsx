import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
function PhotoCard({ photo }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
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
        <button>
          <FaHeart className="text-gray-700 text-[22px] transition-colors duration-300 hover:text-red-600 hover:scale-110" />
        </button>
      </div>
    </div>
  );
}


export default PhotoCard