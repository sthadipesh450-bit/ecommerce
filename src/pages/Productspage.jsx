import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import { useCart } from '../hooks/useCart';
import categoriesData from '../data/categories';
import CategoryTab from '../components/products/CategoryTab';


export default function Productspage() {

  const { items, loading } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  console.log(selectedCategory);

  const filterItems = items.filter((product) => {
    if (selectedCategory === 'all') {
      return true;
    }
    return product.category === selectedCategory;
  });
  console.log("filtered items", filterItems);

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            All Products
          </h1>
          
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            Discover our curated collection of premium products
          </p>
          
          <div className="flex flex-wrap justify-center mb-6">
            <CategoryTab CategoryName="all" key="all" setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
            {
              categoriesData.map((category) => {
                return <CategoryTab CategoryName={category} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} key={category}/>;  
              })
            }
          </div>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filterItems.map((product) => (
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