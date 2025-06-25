import React, { useEffect, useState } from 'react';

const FilterSidebar = ({ products, setFiltered }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // ✅ Get theme from localStorage
  const isDark = typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark';

  useEffect(() => {
    const unique = [...new Set(products.map(p => p.category))];
    setCategories(unique);
  }, [products]);

  useEffect(() => {
    let result = products;

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    setFiltered(result);
  }, [selectedCategory, priceRange, products, setFiltered]);

  // ✨ Dynamically apply classes based on theme
  const selectClass = `w-full px-3 py-2 rounded border transition-colors duration-200 ${
    isDark
      ? 'bg-gray-800 text-white border-gray-600'
      : 'bg-white text-gray-900 border-gray-300'
  }`;

  const optionClass = isDark ? ' text-white' : 'bg-white text-gray-900';

  return (
    <aside className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:mr-6">
      <div className="p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={selectClass}
          >
            <option value="" className={optionClass}>
              All
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className={optionClass}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Price Range</label>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, +e.target.value])}
            className="w-full accent-indigo-500"
          />
          <p className="text-sm">Up to ${priceRange[1]}</p>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
