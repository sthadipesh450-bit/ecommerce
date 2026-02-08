import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Homepage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=6');
        const data = await response.json();
        setProducts(data);
      } catch(error) {
        console.error('Error fetching products', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className={`min-h-screen -mt-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center overflow-hidden pt-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(900px_circle_at_80%_10%,rgba(236,72,153,0.20),transparent_60%)]' : 'bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(900px_circle_at_80%_10%,rgba(236,72,153,0.18),transparent_60%)]'}`}></div>
        <div className={`absolute inset-0 ${darkMode ? 'bg-linear-to-br from-indigo-950/40 via-slate-950 to-slate-900/70' : 'bg-linear-to-br from-white via-slate-50 to-indigo-50'}`}></div>
        <div className="absolute inset-0">
          <div className={`absolute top-10 left-5 md:top-20 md:left-20 w-40 h-40 md:w-80 md:h-80 rounded-full blur-3xl ${darkMode ? 'bg-blue-400/10' : 'bg-blue-400/30'}`}></div>
          <div className={`absolute bottom-10 right-5 md:bottom-20 md:right-20 w-56 h-56 md:w-104 md:h-104 rounded-full blur-3xl ${darkMode ? 'bg-purple-400/10' : 'bg-purple-400/30'}`}></div>
          <div className={`absolute top-1/2 left-1/2 w-44 h-44 md:w-80 md:h-80 rounded-full blur-3xl ${darkMode ? 'bg-pink-400/10' : 'bg-pink-400/30'}`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`text-center lg:text-left ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${darkMode ? 'bg-white/10 text-slate-200 ring-1 ring-white/20' : 'bg-slate-900 text-white'}`}>
                Welcome to E-Shop
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-linear-to-r from-indigo-400 to-pink-500"></span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                Welcome to
                <span className="block bg-linear-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  E-Shop
                </span>
              </h1>
              <p className={`text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                Your one-stop store for trending products, secure checkout, and fast delivery. Explore best-sellers and new arrivals today.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                {['Free 2-day shipping', '30-day returns', 'Secure checkout'].map((item) => (
                  <span key={item} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-white/10 text-slate-200 ring-1 ring-white/10' : 'bg-white text-slate-700 ring-1 ring-slate-200'}`}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/products" className="group w-full sm:w-auto">
                  <button className="w-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    Explore Products
                  </button>
                </Link>
                <button className={`w-full sm:w-auto border-2 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 ${darkMode ? 'border-white/70 text-white hover:bg-white hover:text-black' : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'}`}>
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className={`backdrop-blur-lg rounded-3xl p-5 md:p-8 border ${darkMode ? 'bg-white/10 border-white/20' : 'bg-white/80 border-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.15)]'}`}>
                <div className={`rounded-2xl p-4 mb-4 ${darkMode ? 'bg-slate-900/60 ring-1 ring-white/10' : 'bg-slate-900 text-white'}`}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Drop of the week</p>
                  <p className="text-lg md:text-xl font-semibold mt-2">Aurora Headphones</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-300">From $129</span>
                    <button className="text-xs font-semibold uppercase tracking-wide bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      Shop now
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">1000+</h3>
                    <p className="text-xs md:text-base text-blue-100">Products</p>
                  </div>
                  <div className="bg-linear-to-br from-green-500 to-teal-600 rounded-2xl p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">50k+</h3>
                    <p className="text-xs md:text-base text-green-100">Customers</p>
                  </div>
                  <div className="bg-linear-to-br from-orange-500 to-red-600 rounded-2xl p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">4.9/5</h3>
                    <p className="text-xs md:text-base text-orange-100">Rating</p>
                  </div>
                  <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">24/7</h3>
                    <p className="text-xs md:text-base text-purple-100">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={`py-14 md:py-24 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className={`font-display text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Shop by Category</h2>
            <p className={`text-base md:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                name: "Electronics",
                color: "from-blue-500 to-cyan-500",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M7 20h10M9 16v4M15 16v4" />
                  </svg>
                ),
              },
              {
                name: "Fashion",
                color: "from-pink-500 to-rose-500",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 4l3 2 3-2 4 4-3 2v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8L5 8l4-4z" />
                  </svg>
                ),
              },
              {
                name: "Jewelry",
                color: "from-yellow-500 to-orange-500",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3l4.5 4.5L12 21 7.5 7.5 12 3z" />
                    <path d="M7.5 7.5h9" />
                  </svg>
                ),
              },
              {
                name: "Books",
                color: "from-green-500 to-emerald-500",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 4h10a3 3 0 0 1 3 3v12H8a3 3 0 0 0-3 3V4z" />
                    <path d="M8 4v18" />
                  </svg>
                ),
              },
            ].map((category) => (
              <div key={category.name} className="group cursor-pointer">
                <div className={`bg-linear-to-br ${category.color} rounded-2xl p-4 sm:p-6 md:p-8 text-center text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ring-1 ring-white/20`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 mb-3 md:mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-base md:text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`py-12 md:py-20 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className={`font-display text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Products</h2>
            <p className={`text-base md:text-lg ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Handpicked favorites just for you</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className={`rounded-3xl p-4 animate-pulse flex flex-col justify-between min-h-70 shadow-sm overflow-hidden cursor-pointer ${darkMode ? 'bg-slate-900' : 'bg-gray-100'}`}>
                  <div className={`h-48 rounded-2xl mb-5 ${darkMode ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
                  <div>
                    <div className={`h-4 rounded mb-3 ${darkMode ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
                    <div className={`h-4 rounded w-3/4 mb-3 ${darkMode ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
                    <div className={`h-6 rounded w-1/2 ${darkMode ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
                  </div>
                </div>
              ))
            ) : (
              products.map((product) => (
                <div key={product.id} className="group h-full cursor-pointer">
                  <div className={`rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform-gpu overflow-hidden group-hover:scale-105 h-full min-h-90 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-gray-100'}`}>
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex-1 flex flex-col justify-between">
                        <ProductCard product={product} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="text-center mt-8 md:mt-12 mb-6 md:mb-8">
            <Link to="/products">
              <button className={`inline-block font-semibold py-3 px-6 md:px-8 rounded-full transition text-sm md:text-base ${darkMode ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage

