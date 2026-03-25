import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [imageError, setImageError] = useState(false);

  // ✅ Correct Image URL logic
  const getImageUrl = () => {
    if (!product?.image) return '/images/placeholder.jpg';

    // If already full URL
    if (product.image.startsWith('http')) {
      return product.image;
    }

    // Local image from public/images
    return `/images/${product.image}`;
  };

  const handleAddToCart = async () => {
    const result = await addToCart(product._id, 1);
    if (result.success) {
      setMessage('1 Product Added to Cart');
    } else {
      setMessage(result.message);
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const handleImageError = () => {
    console.log('Image failed to load:', getImageUrl());
    setImageError(true);
  };

  return (
    <div className="card group">
      {/* Image Section */}
      <div className="relative overflow-hidden h-64 w-full bg-beige">
        <img
          src={imageError ? '/images/placeholder.jpg' : getImageUrl()}
          alt={product?.name || 'Product'}
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold mb-2">
          {product?.name || 'Product Name'}
        </h3>

        <p className="text-softBrown text-sm mb-2 line-clamp-2">
          {product?.description || 'No description available'}
        </p>

        {/* ✅ Rupees formatting */}
        <p className="text-gold font-semibold text-lg mb-4">
          ₹{product?.price ? product.price.toLocaleString('en-IN') : '0'}
        </p>

        <div className="flex space-x-2">
          <Link
            to={`/product/${product?._id}`}
            className="flex-1 btn-secondary text-center"
          >
            View Details
          </Link>

          <button
            onClick={handleAddToCart}
            className="flex-1 btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Message Popup */}
      {message && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )}
    </div>
  );
};

export default ProductCard;