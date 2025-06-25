import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl p-5 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="p-3 bg-white/10 dark:bg-white/5 rounded-xl mb-4 shadow-inner">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain"
        />
      </div>

      <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
      <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
      <div className="text-yellow-500 text-xs mt-1">
        {'★'.repeat(Math.round(product.rating.rate))}{' '}
        <span className="text-gray-500 dark:text-gray-400">({product.rating.count})</span>
      </div>

      <Link
        to={`/product/${product.id}`}
        className="mt-auto text-center bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300 shadow"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
