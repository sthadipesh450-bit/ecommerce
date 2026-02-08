import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function NotFound() {
  const { darkMode } = useTheme()
  return (
    <div className={`max-w-2xl mx-auto text-center py-20 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
      <p className={`mb-6 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>Sorry, we couldn't find the page you're looking for.</p>
      <Link to='/' className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Go to Home</Link>
    </div>
  )
}

export default NotFound
