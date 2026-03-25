import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const result = await addToCart(product._id, quantity);
    if (result.success) {
      setMessage('Product added to cart successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex justify-center items-center">
        <p className="text-xl text-brown">Product not found</p>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-brown mb-4">
                {product.name}
              </h1>
              
              <p className="text-softBrown mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <p className="text-sm text-softBrown mb-2">Category</p>
                <span className="bg-beige text-brown px-4 py-2 rounded-lg capitalize">
                  {product.category}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-gold">₹{product.price}</p>
              </div>

              <div className="mb-8">
                <label htmlFor="quantity" className="block text-sm font-medium text-brown mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-beige hover:bg-beige transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-beige hover:bg-beige transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full btn-primary py-3 text-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {message && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;