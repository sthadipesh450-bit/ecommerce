import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function MainLayout() {
  const { darkMode } = useTheme();
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar/>
      <main className="flex-1 py-10">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default MainLayout
