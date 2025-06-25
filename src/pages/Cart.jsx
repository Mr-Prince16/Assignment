import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const isDark =
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark';

  return (
    <>
      <Header />
      <div className="min-h-screen py-10 px-4 transition-all">
        <div className="max-w-5xl mx-auto rounded-[30px] p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`rounded-2xl p-5 transition-all shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),inset_-2px_-2px_5px_rgba(0,0,0,0.2)] ${
                    isDark ? 'bg-white/5' : 'bg-white/40'
                  }`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <span className="text-xl">
                      {openIndex === index ? '▲' : '▼'}
                    </span>
                  </div>

                  {openIndex === index && (
                    <div className="mt-4 text-sm space-y-3">
                      <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-28 w-28 object-contain p-3 rounded-xl shadow-inner"
                        />
                        <div className="space-y-1">
                          <p>Price: ${item.price.toFixed(2)}</p>
                          <p>Quantity: {item.quantity}</p>
                          <p className="font-semibold">
                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="text-right text-lg font-bold pt-4 border-t mt-6">
                Total: ${total.toFixed(2)}
              </div>

              <div className="text-right mt-6">
                <button
                  onClick={() => alert('Redirecting to payment...')}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
