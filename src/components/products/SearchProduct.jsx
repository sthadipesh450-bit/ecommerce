import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function SearchProduct({setSearch, search}) {
  const { darkMode } = useTheme()
  function onType(event){
    setSearch(event.target.value);
  }
  return (
    <div className="relative max-w-md mx-auto px-4 sm:px-0">
      <div className="absolute inset-y-0 left-4 sm:left-0 pl-3 flex items-center pointer-events-none">
        <svg className={`h-5 w-5 ${darkMode ? 'text-slate-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={search}
        onChange={onType}
        className={`w-full pl-10 pr-4 py-2.5 md:py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-sm md:text-base ${
          darkMode
            ? 'border-slate-700 bg-slate-800 text-white placeholder-slate-400'
            : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
        }`}
      />
    </div>
  )
}

export default SearchProduct
