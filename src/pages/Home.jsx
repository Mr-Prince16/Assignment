import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard'; // 💡 Add this for shimmer
import FilterSidebar from '../components/FilterSidebar';
import SortDropdown from '../components/SortDropdown';
import Pagination from '../components/Pagination';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // 🆕 loading flag

  const productsPerPage = 10;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
        setLoading(false); // ✅ Done loading
      });
  }, []);

  useEffect(() => {
    let sorted = [...filtered];

    if (sortOption === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name-asc') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'popularity') {
      sorted.sort((a, b) => b.rating.count - a.rating.count);
    }

    setFiltered(sorted);
  }, [sortOption]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  return (
    <div className=" min-h-screen transition-colors duration-300">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <FilterSidebar products={products} setFiltered={setFiltered} />

        {/* Main product grid */}
        <div className="flex-1">
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
              : currentProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>

          {!loading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
