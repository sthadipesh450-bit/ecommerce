import React from 'react'

function WelcomeBanner({ user }) {
  return (
    <section className="hero">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem',flexWrap:'wrap'}}>
        <div style={{flex:1, minWidth:280}}>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <div style={{padding:'0.25rem 0.6rem',background:'rgba(255,255,255,0.12)',borderRadius:999,fontSize:12,fontWeight:700}}>⭐ Featured</div>
            <div style={{fontSize:12,color:'rgba(255,255,255,0.9)'}}>Limited time</div>
          </div>

          <h1 style={{fontSize:'2.1rem',margin:'8px 0 0',fontWeight:800,lineHeight:1.05}}>Welcome, {user} <span role="img" aria-label="sunglasses">😎</span></h1>
          <p className="lead" style={{maxWidth:560}}>Discover curated picks and limited-time deals tailored just for you. Fresh arrivals added weekly — curated for style, value and durability.</p>

          <div className="cta">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-outline">Explore</button>
          </div>

          <div className="feature-list">
            <div className="feature"><div className="icon">🚚</div><div>Free shipping</div></div>
            <div className="feature"><div className="icon">↩️</div><div>Easy returns</div></div>
            <div className="feature"><div className="icon">🔒</div><div>Secure payment</div></div>
          </div>
        </div>

        <div className="hero-illustration" aria-hidden="true">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.95}}>
            <rect x="0" y="0" width="120" height="120" rx="16" fill="rgba(255,255,255,0.06)" />
            <circle cx="60" cy="44" r="28" fill="white" opacity="0.12" />
            <path d="M40 86c6-6 20-8 40 0" stroke="white" strokeOpacity="0.08" strokeWidth="4" strokeLinecap="round" />
            <text x="50%" y="66%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700">✨</text>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default WelcomeBanner