import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('app-theme') === 'dark'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('app-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const value = useMemo(() => ({
    darkMode,
    toggleTheme: () => setDarkMode((prev) => !prev),
    setDarkMode,
  }), [darkMode])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
