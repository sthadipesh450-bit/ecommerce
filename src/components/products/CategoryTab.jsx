import React from 'react'

function CategoryTab({CategoryName, setSelectedCategory, selectedCategory}) {
    function handleClick(){
        setSelectedCategory(CategoryName)
    }
    
    const isActive = selectedCategory === CategoryName;
    
  return (
    <button 
      onClick={handleClick} 
      className={`inline-block border px-4 py-2 mx-2 my-1 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
        isActive 
          ? 'bg-blue-600 text-white border-blue-600' 
          : 'bg-white hover:bg-blue-50 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600'
      }`}
    >
      {CategoryName}
    </button>
  )
}

export default CategoryTab