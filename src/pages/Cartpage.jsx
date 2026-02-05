import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

function Cartpage() {
  const { cartItems, cartCount, cartTotal, removeFromCart, clearCart } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm p-12">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started</p>
            <Link 
              to="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Shopping Cart</h1>
                <p className="text-blue-100">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>
              </div>
              <button
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
                onClick={() => {
                  if (window.confirm('Clear all items from cart?')) clearCart();
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="p-6">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-20 h-20 object-contain bg-gray-50 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm capitalize">{item.category}</p>
                    <p className="text-2xl font-bold text-green-600 mt-2">${item.price}</p>
                  </div>
                  <button
                    className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg font-medium transition duration-200"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-6 border-t">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Total Amount</p>
                <p className="text-3xl font-bold text-gray-900">${cartTotal.toFixed(2)}</p>
              </div>
              <div className="flex gap-4">
                <Link 
                  to="/products" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition duration-200"
                >
                  Continue Shopping
                </Link>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-200">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;