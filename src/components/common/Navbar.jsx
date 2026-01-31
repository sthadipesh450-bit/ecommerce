import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

function Navbar() {
  const cartCtx = useCart() // safe if provider is temporarily missing
  const cartCount = cartCtx?.cartCount ?? 0

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-40 shadow-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full inline-flex items-center justify-center font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md">
              E
            </div>
            <span className="font-semibold text-white">Ecommerce</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-200 hover:text-white transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">Home</Link>
            <Link to="/products" className="text-slate-200 hover:text-white transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">Products</Link>

            <Link to="/cart" className="text-slate-200 hover:text-white transition inline-flex items-center gap-2 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Cart
              <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-2 text-xs font-medium rounded-full bg-indigo-600 text-white shadow-sm">
                {cartCount}
              </span>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <Link to="/cart" className="relative inline-flex items-center p-2 rounded-md text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m13-7l2 7m-4-7v7" />
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-indigo-600 text-white">{cartCount}</span>
            </Link>

            <button className="p-2 rounded-md text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar