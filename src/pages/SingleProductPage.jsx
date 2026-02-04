import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { products } from '../data/productsData'

function SingleProductPage() {
    const params = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [isAdded, setIsAdded] = useState(false);
    const { addToCart, removeFromCart, isInCart } = useCart();
    console.log(params);

    const handleAddToCart = () => {
        addToCart(item);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

      useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        
        async function fetchProducts() {
          try {
            const productId = parseInt(params.id);
            
            // Check if it's a local product (IDs 30, 40, 50, 60)
            const localProduct = products.find(p => p.id === productId);
            
            if (localProduct) {
              setItem(localProduct);
              setLoading(false);
            } else {
              // Fetch from API for other products
              const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
              const data = await response.json();
              setItem(data);
              setLoading(false);
            }
          } catch (error) {
            console.error('Error fetching products', error);
            setLoading(false);
          }
        }
        fetchProducts();
      }, [params.id]);
    
      console.log("item:", item);
      console.log("loading:", loading);

      if (loading) {
        return <div className="text-center py-16">Loading...</div>;
      }
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="flex justify-center items-center bg-gray-100 rounded-lg p-8">
              <img 
                src={item.image} 
                alt={item.title} 
                className="max-w-full max-h-96 object-contain"
              />
            </div>
            
            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">{item.title}</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-green-600">${item.price}</span>
                {item.rating && (
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="font-semibold text-gray-700">{item.rating.rate}</span>
                    <span className="text-gray-500 ml-1">({item.rating.count} reviews)</span>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
              
              {isInCart(item.id) ? (
                <div className="space-y-3">
                  <button 
                    onClick={handleAddToCart}
                    disabled
                    className="w-full bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg cursor-not-allowed"
                  >
                    Already in Cart
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                    >
                      Remove from Cart
                    </button>
                    <Link 
                      to="/cart"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-center flex items-center justify-center"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={handleAddToCart}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition duration-200 ${
                    isAdded 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isAdded ? '✓ Added to Cart!' : 'Add to Cart'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage