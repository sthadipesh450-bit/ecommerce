import React from 'react';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/products/ProductCard';

function Cartpage() {
  const { cartItems, cartCount, cartTotal, removeFromCart, clearCart } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return <p className="mt-4 text-center text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Cart Items ({cartCount})</h1>
        <button
          className="text-sm text-red-600 hover:underline"
          onClick={() => {
            if (window.confirm('Clear cart?')) clearCart();
          }}
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border p-2 rounded">
            <ProductCard product={item} />
            <button
              className="text-red-500 hover:underline"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 font-semibold">
        Total: ${cartTotal.toFixed(2)}
      </div>
    </div>
  );
}

export default Cartpage;
