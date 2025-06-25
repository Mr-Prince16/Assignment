import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  // ✅ Read theme from localStorage
  const isDark = typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark';

  useEffect(() => {
    setProduct(null);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleQuantity = (type) => {
    setQuantity(prev => {
      if (type === 'inc') return prev + 1;
      if (type === 'dec' && prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 py-10 transition-all">
        <div className="max-w-6xl mx-auto rounded-[30px] p-8">
          {!product ? (
            <div className="animate-pulse flex flex-col lg:flex-row gap-10 items-center">
              <div
                className={`rounded-2xl p-6 w-full lg:w-1/2 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                } h-[400px]`}
              />
              <div className="flex-1 w-full space-y-4">
                <div
                  className={`h-8 rounded ${
                    isDark ? 'bg-gray-700' : 'bg-gray-300'
                  } w-3/4`}
                />
                <div
                  className={`h-4 rounded ${
                    isDark ? 'bg-gray-700' : 'bg-gray-300'
                  } w-full`}
                />
                <div
                  className={`h-4 rounded ${
                    isDark ? 'bg-gray-700' : 'bg-gray-300'
                  } w-5/6`}
                />
                <div
                  className={`h-10 rounded ${
                    isDark ? 'bg-indigo-700' : 'bg-indigo-300'
                  } w-40`}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="rounded-2xl p-6 shadow-inner w-full lg:w-1/2 bg-white/10 dark:bg-white/5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-contain max-h-[400px]"
                />
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold">{product.title}</h2>
                <p>{product.description}</p>
                <p className="text-xl font-semibold text-indigo-600">${product.price}</p>
                <p className="text-yellow-500 text-sm">
                  {'★'.repeat(Math.round(product.rating.rate))}{' '}
                  <span className="text-gray-500 dark:text-gray-400">
                    ({product.rating.count})
                  </span>
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded px-2">
                    <button
                      onClick={() => handleQuantity('dec')}
                      className="px-2 py-1 text-lg"
                    >
                      −
                    </button>
                    <span className="px-3">{quantity}</span>
                    <button
                      onClick={() => handleQuantity('inc')}
                      className="px-2 py-1 text-lg"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
