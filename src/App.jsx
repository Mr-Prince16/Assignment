import React, { useState, useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div
        className={`pt-24 min-h-screen transition-all duration-300 ${
          isDark
            ? 'bg-[#181b24] text-gray-100'
            : 'bg-[#e6e9f0] text-gray-900'
        } shadow-[inset_6px_6px_14px_#d1d9e6,inset_-6px_-6px_14px_#ffffff] dark:shadow-[6px_6px_14px_#12151c,-6px_-6px_14px_#2a2e3f]`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
