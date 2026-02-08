import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Cartpage() {
  const { cartItems, cartCount, cartTotal, removeFromCart, clearCart } = useCart();
  const { darkMode } = useTheme();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className={`min-h-screen py-8 md:py-12 ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className={`rounded-lg shadow-sm p-8 md:p-12 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}>
            <div className={`text-5xl md:text-6xl mb-4 ${darkMode ? 'text-slate-400' : 'text-gray-400'}`}>🛒</div>
            <h2 className={`text-xl md:text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Your cart is empty</h2>
            <p className={`mb-6 text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Add some products to get started</p>
            <Link 
              to="/products" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 text-sm md:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-8 md:py-12 ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`rounded-lg shadow-sm overflow-hidden ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}>
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 to-purple-600 px-4 md:px-6 py-6 md:py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Shopping Cart</h1>
                <p className="text-blue-100 text-sm md:text-base">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>
              </div>
              <button
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition duration-200 text-sm md:text-base w-full sm:w-auto"
                onClick={() => {
                  if (window.confirm('Clear all items from cart?')) clearCart();
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="p-4 md:p-6">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg hover:shadow-sm transition-shadow ${darkMode ? 'border border-slate-800 bg-slate-950/40' : 'border border-gray-200 bg-white'}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-20 h-20 object-contain rounded-lg mx-auto sm:mx-0 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`}
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className={`font-semibold mb-1 text-sm md:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                    <p className={`text-xs md:text-sm capitalize ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{item.category}</p>
                    <p className="text-xl md:text-2xl font-bold text-green-600 mt-2">${item.price}</p>
                  </div>
                  <button
                    className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg font-medium transition duration-200 text-sm md:text-base w-full sm:w-auto"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className={`px-4 md:px-6 py-6 border-t ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className={`text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Total Amount</p>
                <p className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>${cartTotal.toFixed(2)}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
                <Link 
                  to="/products" 
                  className={`px-6 py-3 rounded-lg font-medium transition duration-200 text-center text-sm md:text-base ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-100' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                >
                  Continue Shopping
                </Link>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-200 text-sm md:text-base">
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
