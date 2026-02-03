import React from 'react'

function WelcomeBanner({ user }) {
  return (
    <section className="relative overflow-hidden rounded-xl p-8 sm:p-10 bg-linear-to-r from-indigo-600 via-violet-600 to-pink-500 text-white shadow-2xl">
      {/* Decorative shapes */}
      <svg className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-12 opacity-20 w-64 h-64" viewBox="0 0 200 200" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.06"/>
            <stop offset="1" stopColor="#fff" stopOpacity="0.02"/>
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="80" fill="url(#g)"></circle>
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">⭐ Featured</span>
            <span className="text-sm text-white/90">Limited time</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome, {user} <span role="img" aria-label="sunglasses">😎</span>
          </h1>

          <p className="mt-4 text-white/90 max-w-xl text-sm sm:text-base">
            Discover curated picks and limited-time deals tailored just for you. Fresh arrivals added weekly — curated for style, value, and durability.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-indigo-700 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              Shop Now
            </button>
            <button className="inline-flex items-center px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition">
              Explore
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/6 px-3 py-2 rounded-md text-sm">
              <div className="w-7 h-7 rounded-md bg-white/6 flex items-center justify-center">🚚</div> Free shipping
            </div>
            <div className="flex items-center gap-2 bg-white/6 px-3 py-2 rounded-md text-sm">
              <div className="w-7 h-7 rounded-md bg-white/6 flex items-center justify-center">↩️</div> Easy returns
            </div>
            <div className="flex items-center gap-2 bg-white/6 px-3 py-2 rounded-md text-sm">
              <div className="w-7 h-7 rounded-md bg-white/6 flex items-center justify-center">🔒</div> Secure payment
            </div>
          </div>
        </div>

        <div className="w-full md:w-56 lg:w-64 rounded-lg bg-white/6 flex items-center justify-center p-6" aria-hidden>
          <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.95 }}>
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