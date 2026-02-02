// src/context/CartContext.jsx
import React, { useState, useEffect } from 'react'
import CartContext from './CartContextBase'

function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('CartProvider mounted')
  }, [])

  useEffect(() => {
    console.log('CartProvider items changed:', items)
  }, [items])

  function addToCart(product) {
    const exists = items.find(item => item.id === product.id)
    if (exists) return

    setItems(prev => {
      const next = [...prev, product]
      console.log('CartContext: addToCart — prevLen=', prev.length, 'nextLen=', next.length, 'productId=', product?.id)
      return next
    })
  }

  function removeFromCart(productId) {
    setItems(prev => {
      const next = prev.filter(item => item.id !== productId)
      console.log('CartContext: removeFromCart — prevLen=', prev.length, 'nextLen=', next.length, 'productId=', productId)
      return next
    })
  }

  function isInCart(productId) {
    return items.some(item => item.id === productId)
  }

  const cartCount = items.length

  useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setItems(data);
          setLoading(false);  
        }
        catch(error) {
          console.error('Error fetching products', error);
          setLoading(false);
        }
      }
      fetchProducts();
    }, []);

  return (
    <CartContext.Provider value={{ items, loading, addToCart, removeFromCart, cartCount, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider