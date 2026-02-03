import React from 'react'
import WelcomeBanner from '../components/home/WelcomeBanner'
import ProductCard from '../components/products/ProductCard'
import { products } from '../data/productsData'
import PracticeState from '../components/common/PracticeState'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <WelcomeBanner user='Dipesh'/>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Highlighted Products</h1>
          <Link 
            to="/products" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
          >
            View All Products
          </Link>
        </div>

        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Simple CTA Section */}
      <div className="mt-12 text-center py-12 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Discover More Amazing Products</h3>
          <p className="text-gray-600 text-lg">Quality products at unbeatable prices</p>
          <div className="mt-4 w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>
      
      <PracticeState/>
    </div>
  )
}

export default Homepage