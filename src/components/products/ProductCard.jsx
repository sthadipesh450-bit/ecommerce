// src/components/products/ProductCard.jsx
import React from 'react'
import { useCart } from '../../hooks/useCart'

function ProductCard({ product: p }) {
  // accept either { product, quantity } or direct product
  const product = p?.product ?? p
  const { addToCart } = useCart()

  if (!product) return null

  function addProductToCart() {
    addToCart(product)
  }

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-1">
      <div className="bg-slate-100 flex items-center justify-center h-48">
        <img src={product.image} alt={product.name} className="max-h-44 object-contain" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-indigo-600 font-semibold">${product.price}</p>
          <button
            onClick={addProductToCart}
            className="inline-flex items-center px-3 py-1 rounded-md bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard