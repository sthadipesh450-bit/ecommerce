import React, { useState, useEffect } from 'react'
import CartContext from './CartContextBase'

function CartProvider({ children }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('CartProvider mounted')
  }, [])

  useEffect(() => {
    console.log('CartProvider items changed:', items)
  }, [items])

  function addToCart(product) {
    setItems(prev => {
      const next = [...prev, product]
      console.log('CartContext: addToCart — prevLen=', prev.length, 'nextLen=', next.length, 'productId=', product?.id)
      return next
    })
  }

  const cartCount = items.length
  return (
    <CartContext.Provider value={{ items, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider