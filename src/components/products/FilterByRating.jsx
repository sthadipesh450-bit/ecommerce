import React from 'react'

function FilterByRating({ setMinRating, setMaxRating }) {
    function setMin(event){
        setMinRating(event.target.value);
    }
    function setMax(event){
        setMaxRating(event.target.value);
    }
  return (
    <div className="flex items-center gap-4 justify-center my-4">
        <span className="text-gray-700 font-medium">Min Star :</span> <input type='number' onChange={setMin} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20"/>
        <span className="text-gray-700 font-medium">Max Star :</span> <input type='number' onChange={setMax} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20"/>
    </div>
  )
}

export default FilterByRating