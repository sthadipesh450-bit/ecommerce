import React from 'react'

function ProductCard({product}) {
  return (
    <article className="card" style={{transition:'transform .12s ease'}}>
      <div className="product-image-bg">
        <img src={product.image} alt={product.name} style={{maxHeight:'11rem', objectFit:'contain'}} />
      </div>
      <div style={{padding:'1rem'}}>
        <h3 style={{fontSize:'1.125rem', fontWeight:600, color:'#111827'}}>{product.name}</h3>
        <div style={{marginTop:8, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <p className="price">${product.price}</p>
          <button className="btn-primary">Add</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard