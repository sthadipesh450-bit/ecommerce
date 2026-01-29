import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="container">
        <div className="inner">
          <Link to="/" className="flex items-center">
            <div className="brand-badge" role="img" aria-label="Ecommerce logo">E</div>
            <span className="site-title">Ecommerce</span>
          </Link>

          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <button className="btn-primary">Shop</button>
          </div>

          <div className="mobile-menu">
            <button className="p-2 rounded-md">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar