import React from 'react';

const SkeletonCard = () => {
  const isDark = typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark';

  return (
    <div
      className={`animate-pulse p-4 rounded-xl shadow-md flex flex-col gap-4 ${
        isDark ? 'bg-[#1f2230]' : 'bg-white'
      }`}
    >
      {/* Image placeholder */}
      <div
        className={`h-48 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`}
      ></div>

      {/* Title lines */}
      <div
        className={`h-4 w-3/4 rounded ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`}
      ></div>
      <div
        className={`h-4 w-1/2 rounded ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`}
      ></div>

      {/* Button placeholder */}
      <div
        className={`h-8 rounded mt-auto ${
          isDark ? 'bg-indigo-600' : 'bg-indigo-300'
        }`}
      ></div>
    </div>
  );
};

export default SkeletonCard;
