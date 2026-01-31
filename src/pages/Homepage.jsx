import React from 'react'
import WelcomeBanner from '../components/home/WelcomeBanner'
import ProductCard from '../components/products/ProductCard'
import { products } from '../data/productsData'
import PracticeState from '../components/common/PracticeState'

function Homepage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <WelcomeBanner user='Dipesh'/>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Highlighted Products</h1>
          <p className="text-gray-500">Top picks curated for you</p>
        </div>

        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <PracticeState/>
    </div>
  )
}

export default Homepage