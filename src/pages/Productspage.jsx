import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import { useCart } from '../hooks/useCart';
import categoriesData from '../data/categories';
import CategoryTab from '../components/products/CategoryTab';
import SearchProduct from '../components/products/SearchProduct';
import { useSearchParams } from 'react-router-dom';
import ProductRange from '../components/products/ProductRange';
import FilterByRating from '../components/products/FilterByRating';
import { useTheme } from '../context/ThemeContext';




export default function Productspage() {

  const { items, loading } = useCart();
  const { darkMode } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);

  console.log("minRating:", minRating);
  console.log("maxRating:", maxRating);

  useEffect(() => {
    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  }, [search, setSearchParams]);

  const filterItems = items.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  console.log("filtered items", filterItems);

  function productRangeFilter(filterItems) {
    if (!minValue && !maxValue) return filterItems;
    return filterItems.filter((product) => {
      const min = minValue ? parseFloat(minValue) : 0;
      const max = maxValue ? parseFloat(maxValue) : Infinity;
      return product.price >= min && product.price <= max;
    });
  }

  function productRatingFilter(filterItems) {
    if (!minRating && !maxRating) return filterItems;
    return filterItems.filter((product) => {
      const min = minRating ? parseFloat(minRating) : 0;
      const max = maxRating ? parseFloat(maxRating) : 5;
      return product.rating && product.rating.rate >= min && product.rating.rate <= max;
    });
  }

  const priceFilteredItems = productRangeFilter(filterItems);
  const finalFilteredItems = productRatingFilter(priceFilteredItems);

  if (loading) {
    return <div className={`text-center py-16 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>Loading...</div>;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-white' : 'bg-linear-to-br from-blue-50 via-white to-purple-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-6 md:mb-8">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            All Products
          </h1>
          
          <p className={`text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-4 md:mb-6 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
            Discover our curated collection of premium products
          </p>

          <div className="mb-4 md:mb-6 space-y-4">
            <SearchProduct setSearch={setSearch} search={search} />
            <ProductRange setMaxValue={setMaxValue} setMinValue={setMinValue}/>
            <FilterByRating setMaxRating={setMaxRating} setMinRating={setMinRating} />

          </div>
          
          <div className="flex flex-wrap justify-center mb-4 md:mb-6">
            <CategoryTab CategoryName="all" key="all" setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
            {
              categoriesData.map((category) => {
                return <CategoryTab CategoryName={category} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} key={category}/>;  
              })
            }
          </div>
          
          <div className="w-24 md:w-32 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-sm"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {finalFilteredItems.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
