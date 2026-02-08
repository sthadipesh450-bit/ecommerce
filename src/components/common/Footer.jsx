import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function Footer() {
  const [email, setEmail] = useState('')
  const { darkMode } = useTheme()

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer className={`border-t ${darkMode ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start mb-2 md:mb-3">
              <div className="w-8 h-8 md:w-11 md:h-11 rounded-full inline-flex items-center justify-center font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow text-sm md:text-base">E</div>
              <span className={`ml-2 md:ml-3 font-semibold text-sm md:text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ecommerce</span>
            </Link>
            <p className={`text-xs md:text-sm max-w-sm mx-auto md:mx-0 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Small shop UI built with â¤ï¸. Curated products, fast shipping and friendly support.
            </p>

            <div className="mt-3 md:mt-4 flex gap-2 md:gap-3 justify-center md:justify-start">
              <a href="#" aria-label="Twitter" className={`p-1.5 md:p-2 rounded-md transition ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'}`}>
                <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M8 19c7 0 10.8-6 10.8-11.2v-.5A7.5 7.5 0 0 0 20 4.6a7.3 7.3 0 0 1-2.1.6 3.7 3.7 0 0 0 1.6-2 7.4 7.4 0 0 1-2.4.9A3.7 3.7 0 0 0 12.6 6c-2 0-3.6 1.8-3.6 4 0 .3 0 .6.1.9A10.5 10.5 0 0 1 3.3 5.8a4 4 0 0 0-.5 2 3.9 3.9 0 0 0 1.6 3.2c-.9 0-1.7-.3-2.4-.7v.1c0 1.9 1.3 3.6 3 4a3.6 3.6 0 0 1-1 .1c-.2 0-.4 0-.6-.1a3.8 3.8 0 0 0 3.4 2.7A7.5 7.5 0 0 1 4 17.6 10.5 10.5 0 0 0 8 19" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={`p-1.5 md:p-2 rounded-md transition ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'}`}>
                <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className={`p-1.5 md:p-2 rounded-md transition ${darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'}`}>
                <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.6.7 1.6.7.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.7.1-3.5 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.6 3.4-1.2 3.4-1.2.6 1.8.2 3.2.1 3.5.8.9 1.2 2 1.2 3.2 0 4.5-2.7 5.4-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A12 12 0 0 0 12 .5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block md:col-span-2">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Shop</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li><Link to="/products" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>All Products</Link></li>
                  <li><a href="#" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>New Arrivals</a></li>
                  <li><a href="#" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>Best Sellers</a></li>
                </ul>
              </div>

              <div>
                <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Company</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li><a href="#" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>About</a></li>
                  <li><a href="#" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>Careers</a></li>
                  <li><a href="#" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>Press</a></li>
                </ul>
              </div>

              <div>
                <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Support</h4>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li><a href="#" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>Help Center</a></li>
                  <li><a href="#" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>Contact</a></li>
                  <li><a href="#" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>Shipping</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className={`text-xs md:text-sm font-semibold mb-2 md:mb-3 text-center md:text-left ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Join our newsletter</h4>
            <p className={`text-xs md:text-sm mb-3 md:mb-4 text-center md:text-left ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Get exclusive deals & updates.</p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`flex-1 min-w-0 px-3 md:px-4 py-2 md:py-2.5 rounded-full border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition ${
                  darkMode
                    ? 'border-slate-700 bg-slate-800 placeholder-slate-400 text-white'
                    : 'border-slate-300 bg-white placeholder-slate-400 text-slate-900'
                }`}
              />
              <button
                className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-md hover:from-indigo-600 hover:to-pink-600 transition text-xs md:text-sm"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={`mt-4 md:mt-8 pt-4 md:pt-6 border-t text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 ${
          darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
        }`}>
          <p>Â© {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
          <div className="flex items-center gap-3 md:gap-4">
            <Link to="/terms" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>Terms</Link>
            <Link to="/privacy" className={darkMode ? 'hover:text-white' : 'hover:text-slate-900'}>Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
