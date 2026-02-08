import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function FilterByRating({ setMinRating, setMaxRating }) {
    const { darkMode } = useTheme()
    function setMin(event){
        setMinRating(event.target.value);
    }
    function setMax(event){
        setMaxRating(event.target.value);
    }
  return (
    <div className="flex items-center gap-4 justify-center my-4">
        <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>Min Star :</span>
        <input type='number' onChange={setMin} className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 ${
          darkMode ? 'border-slate-700 bg-slate-800 text-white' : 'border-gray-300 bg-white text-gray-900'
        }`}/>
        <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>Max Star :</span>
        <input type='number' onChange={setMax} className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 ${
          darkMode ? 'border-slate-700 bg-slate-800 text-white' : 'border-gray-300 bg-white text-gray-900'
        }`}/>
    </div>
  )
}

export default FilterByRating
