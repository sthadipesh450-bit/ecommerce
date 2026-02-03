import React, { useState } from 'react'

import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';


function ProductCard({product}) {
 const [isAdded, setIsAdded] = useState(false)

const { addToCart, isInCart, removeFromCart } = useCart();

const isCart = isInCart(product.id);

console.log("isCart:", isCart);


function addProductToCart() {

addToCart(product);

handleAddCart();

}


 function removeProductFromCart() {

removeFromCart(product.id);

 }


const handleAddCart = () => {

 setIsAdded(true)

 setTimeout(() => setIsAdded(false), 2000)

}


 return (
<Link to={`/products/${product.id}`} className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 p-4 transform hover:-translate-y-1">

{/* Image */}

<div className="relative overflow-hidden bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">

<img 

src={product.image} 

 alt={product.name} 

 className="max-w-full max-h-full object-contain"

 />

 <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">

 New

</div>
</div>


 {/* Content */}

<h3 className="text-base font-semibold text-gray-900 mb-2">{product.title}</h3>



 <div className="flex items-center gap-1 mb-2">

<span className="text-yellow-400">{'⭐'.repeat(Math.floor(product.rating.rate))}</span>

<span className="text-sm text-gray-600">({product.rating.count})</span>

 </div>

{/* Price */}

<div className="flex items-center gap-2 mb-4">

 <p className="text-2xl font-bold text-blue-600">${product.price}</p>

<p className="text-lg text-gray-400 line-through">${Math.round(product.price * 1.2)}</p>

</div>


{/* Button */}

{isCart ? (

 <button onClick={removeProductFromCart} className="w-full font-semibold py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
Remove from cart
 </button>

 ) : (

<button 

 onClick={addProductToCart}
className={`w-full font-semibold py-2 px-4 rounded-lg transition ${

 isAdded 
 ? 'bg-green-500 text-white' 
 : 'bg-blue-500 text-white hover:bg-blue-600'

 }`}

 >

 {isAdded ? '✓ Added!' : 'Add to Cart'}
</button>
 )}


 </Link>

)

}


export default ProductCard