import React from 'react'
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/products/ProductCard'

function Cartpage() {
  const {items} = useCart();
  console.log("Items in cart:", items);

  return (
    <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Cartpage