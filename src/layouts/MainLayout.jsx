import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Navbar/>
      <main className="min-h-[75vh] py-10">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default MainLayout