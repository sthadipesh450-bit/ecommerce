import React from 'react'
import WelcomeBanner from '../components/home/WelcomeBanner'
import ProductCard from '../components/products/ProductCard'
import { products } from '../data/productsData'

function Homepage() {
  return (
    <div className="container" style={{padding:'1rem'}}>
      <WelcomeBanner user='Dipesh'/>

      <div style={{marginTop:24}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <h1 style={{fontSize:'1.25rem', fontWeight:700}}>Highlighted Products</h1>
          <p style={{color:'#6b7280'}}>Top picks curated for you</p>
        </div>

        <div style={{marginTop:16, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16}}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage