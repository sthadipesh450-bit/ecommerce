import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Productspage from './pages/Productspage'
import CartProvider from './context/CartContext'
import Cartpage from './pages/Cartpage'
import SingleProductPage from './pages/SingleProductPage'

function App() {
  return (
    <CartProvider>  
  <Routes>

    <Route path='/' element={<MainLayout />} >

      <Route index element={<Homepage/>}/>
      <Route path ='cart' element={<Cartpage/>} />
      <Route path='products' element={<Productspage/>} />
      <Route path='products/:id' element={<SingleProductPage/>} />

    </Route>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </CartProvider>
  )
}

export default App