import React from 'react'
import WelcomeBanner from '../components/home/WelcomeBanner'
import ProductCard from '../components/products/ProductCard'
import { products } from '../data/productsData'
import PracticeState from '../components/common/PracticeState'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <WelcomeBanner user='Dipesh'/>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Highlighted Products</h1>
              <p className="text-gray-600">Handpicked items just for you</p>
            </div>
            <Link 
              to="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 shadow-sm hover:shadow-md"
            >
              View All Products
            </Link>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center py-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Discover More Amazing Products</h3>
            <p className="text-blue-100 text-xl mb-8">Quality products at unbeatable prices with fast shipping</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
              >
                Shop Now
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <PracticeState/>
      </div>
    </div>
  )
}

export default Homepage