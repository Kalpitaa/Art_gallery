// pages/Cart.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cart, cartCount, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    if (!user) {
      navigate('/login');
    } else {
      alert('Proceeding to checkout!');
    }
  };

  // Filter out items with null or undefined productId
  const validProducts = cart?.products?.filter(item => item && item.productId) || [];

  if (!cart || validProducts.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-cream">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">Your Cart is Empty</h2>
            <p className="text-softBrown mb-6">Start exploring our collection!</p>
            <Link to="/explore" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-brown mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="divide-y divide-beige">
                {validProducts.map((item) => (
                  <div key={item.productId} className="p-4 flex items-center gap-4">
                    <img 
                      src={item.product?.image || '/images/placeholder.jpg'} 
                      alt={item.product?.name || 'Product'}
                      className="w-20 h-20 object-cover rounded"
                      onError={(e) => {
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-brown">{item.product?.name || 'Product'}</h3>
                      <p className="text-gold font-bold">₹{item.product?.price || 0}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-beige hover:bg-gold hover:text-white transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-beige hover:bg-gold hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-brown mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Items ({cartCount})</span>
                  <span>₹{getCartTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-beige pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-gold">₹{getCartTotal()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="btn-primary w-full text-center"
              >
                Proceed to Checkout
              </button>
              
              <Link 
                to="/explore" 
                className="block text-center text-softBrown hover:text-gold mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;