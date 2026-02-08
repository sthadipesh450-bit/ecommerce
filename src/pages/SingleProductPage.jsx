import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { products } from '../data/productsData'
import ProtectedRoute from '../components/common/ProtectedRoute';
import { useTheme } from '../context/ThemeContext';

function SingleProductPage() {
    const params = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [isAdded, setIsAdded] = useState(false);
    const { addToCart, removeFromCart, isInCart } = useCart();
    const { darkMode } = useTheme();
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
        return <div className={`text-center py-16 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>Loading...</div>;
      }
  return (
    <ProtectedRoute>
    <div className={`min-h-screen py-6 md:py-8 ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
            {/* Image Section */}
            <div className={`flex justify-center items-center rounded-lg p-6 md:p-8 ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="max-w-full max-h-64 md:max-h-96 object-contain"
              />
            </div>
            
            {/* Product Details */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <span className={`inline-block text-xs md:text-sm font-medium px-3 py-1 rounded-full mb-3 ${darkMode ? 'bg-blue-900/40 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                  {item.category}
                </span>
                <h1 className={`text-2xl md:text-3xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h1>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <span className="text-3xl md:text-4xl font-bold text-green-600">${item.price}</span>
                {item.rating && (
                  <div className={`flex items-center px-3 py-1 rounded-full ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className={`font-semibold text-sm md:text-base ${darkMode ? 'text-yellow-100' : 'text-gray-700'}`}>{item.rating.rate}</span>
                    <span className={`ml-1 text-xs md:text-sm ${darkMode ? 'text-yellow-200/70' : 'text-gray-500'}`}>({item.rating.count} reviews)</span>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className={`text-base md:text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Description</h3>
                <p className={`leading-relaxed text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{item.description}</p>
              </div>
              
              {isInCart(item.id) ? (
                <div className="space-y-3">
                  <button 
                    onClick={handleAddToCart}
                    disabled
                    className="w-full bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg cursor-not-allowed text-sm md:text-base"
                  >
                    Already in Cart
                  </button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-sm md:text-base"
                    >
                      Remove from Cart
                    </button>
                    <Link 
                      to="/cart"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-center flex items-center justify-center text-sm md:text-base"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={handleAddToCart}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition duration-200 text-sm md:text-base ${
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
    </ProtectedRoute>
  )
}

export default SingleProductPage
