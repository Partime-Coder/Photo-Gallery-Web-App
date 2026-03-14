import React from 'react'

function SearchInput({ value, onChange }) {
  return (
    <div className="mb-4 flex justify-center">
      <input
        type="text"
        placeholder="Search by author..."
        value={value}
        onChange={onChange}
        className="w-full md:w-[75%] p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#4E9358] placeholder:text-[#4E9358]"
      />
    </div>
  );
}
export default SearchInput