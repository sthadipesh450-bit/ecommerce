import React from 'react'

function ProductRange({ setMinValue, setMaxValue }) {
    function setMin (event){
        setMinValue(event.target.value);    
    }

    function setMax (event){
        setMaxValue(event.target.value);
    }
  return (
    <div className="my-4 flex items-center gap-4 justify-center">
        <span className="text-gray-700 font-medium">Min Price :</span>
        <input type='number' onChange={setMin} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-24" />
        <span className="text-gray-700 font-medium">Max Price :</span> 
        <input type='number' onChange={setMax} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-24" />
    </div>
  )
}

export default ProductRange