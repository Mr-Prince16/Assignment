import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaHome, FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 transition-all duration-300 ${
        isDark
          ? 'bg-[#1a1a2e] shadow-[0_4px_10px_rgba(0,0,0,0.6)]'
          : 'bg-[#e6e9f0] shadow-[0_4px_10px_rgba(209,217,230,0.8)]'
      }`}
    >
      <div className="max-w-7xl mx-auto h-[72px] flex items-center justify-between flex-wrap gap-4">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <FaShoppingBag className="text-indigo-500" />
          Shopping Spree
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/" className="flex items-center gap-1 hover:underline text-sm sm:text-base">
            <FaHome /> <span className="hidden sm:inline">Home</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-1 hover:underline text-sm sm:text-base">
            <FaShoppingCart /> <span className="hidden sm:inline">Cart</span>
          </Link>
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2 px-3 py-1 text-sm font-medium hover:scale-105 transition-transform"
          >
            {isDark ? <FaSun /> : <FaMoon />}
            <span className="hidden md:inline">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
