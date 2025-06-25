import React from 'react';

const SortDropdown = ({ sortOption, setSortOption }) => {
  // ✅ Check theme from localStorage
  const isDark = typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark';

  const selectClass = `px-3 py-2 rounded shadow-sm border transition-colors duration-200 ${
    isDark
      ? 'bg-gray-800 text-white border-gray-600'
      : 'bg-white text-gray-900 border-gray-300'
  }`;

  const optionClass = isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';

  return (
    <div className="flex justify-end mb-4">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className={selectClass}
      >
        <option value="" className={optionClass}>
          Sort By
        </option>
        <option value="price-asc" className={optionClass}>
          Price: Low → High
        </option>
        <option value="price-desc" className={optionClass}>
          Price: High → Low
        </option>
        <option value="name-asc" className={optionClass}>
          Name: A → Z
        </option>
        <option value="popularity" className={optionClass}>
          Popularity
        </option>
      </select>
    </div>
  );
};

export default SortDropdown;
