import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function Navbar() {
  const cartCtx = useCart();
  const cartCount = cartCtx?.cartCount ?? 0;

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-40 shadow-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full inline-flex items-center justify-center font-bold bg-linear-to-r from-indigo-500 to-pink-500 text-white shadow-md">
              E
            </div>
            <span className="font-semibold text-white">Ecommerce</span>
          </Link>

          {/* Desktop Menu */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-slate-200 hover:text-white transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-slate-200 hover:text-white transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Products
            </Link>

            {/* Colorful Cart */}
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-2 px-3 py-1 rounded-md text-white bg-linear-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:scale-105 transform transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {/* Cart Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m13-7l2 7m-4-7v7"
                />
              </svg>

              Cart

              {/* Cart Count Badge with new color suggestion */}
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-6 h-6 px-2 text-xs font-medium rounded-full bg-cyan-400 text-black shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
