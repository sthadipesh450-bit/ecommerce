import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function CategoryTab({CategoryName, setSelectedCategory, selectedCategory}) {
    const { darkMode } = useTheme()
    function handleClick(){
        setSelectedCategory(CategoryName)
    }
    
    const isActive = selectedCategory === CategoryName;
    
  return (
    <button 
      onClick={handleClick} 
      className={`inline-block border px-3 md:px-4 py-1.5 md:py-2 mx-1 md:mx-2 my-1 rounded-full text-xs md:text-sm font-medium transition-all duration-200 capitalize ${
        isActive 
          ? 'bg-blue-600 text-white border-blue-600' 
          : darkMode
            ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
            : 'bg-white hover:bg-blue-50 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600'
      }`}
    >
      {CategoryName}
    </button>
  )
}

export default CategoryTab
