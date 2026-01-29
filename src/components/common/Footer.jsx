import React from 'react'

function Footer() {
  return (
    <footer className="mt-16 bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6" role="contentinfo">
        <div className="flex items-center gap-4">
          <div className="brand-badge" style={{width:56,height:56,fontSize:20}}>E</div>
          <div>
            <div className="text-base font-semibold">Ecommerce</div>
            <div className="text-sm text-gray-500">Beautiful products, honest prices</div>
          </div>
        </div>
        <div className="text-base text-gray-500">© {new Date().getFullYear()} Ecommerce — All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer