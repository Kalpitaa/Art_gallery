import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/products', {
          signal: controller.signal,
          timeout: 10000 // 10 second timeout
        });
        
        if (isMounted) {
          console.log('Products loaded:', response.data);
          setProducts(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          if (axios.isCancel(err)) {
            console.log('Request canceled:', err.message);
          } else if (err.code === 'ECONNABORTED') {
            setError('Request timeout - please try again');
          } else {
            console.error('Error fetching products:', err);
            setError('Failed to load products. Please refresh the page.');
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  if (error) {
    return (
      <div className="pt-16 min-h-screen bg-cream">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-red-500 text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">Connection Error</h2>
            <p className="text-softBrown mb-6">{error}</p>
            <p className="text-sm text-softBrown mb-4">
              This might be caused by browser extensions. Try:
            </p>
            <ul className="text-left text-sm text-softBrown mb-6 list-disc pl-5">
              <li>Opening in incognito mode</li>
              <li>Disabling ad blockers</li>
              <li>Clearing browser cache</li>
            </ul>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary w-full"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown mb-4">
            Explore Our <span className="text-gold">Collection</span>
          </h1>
          <p className="text-softBrown max-w-2xl mx-auto">
            Discover handcrafted Buddha statues and spiritual paintings that bring peace and harmony to your space
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {['all', 'statue', 'painting', 'accessory'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-lg capitalize transition-colors ${
                category === cat
                  ? 'bg-gold text-white'
                  : 'bg-white text-brown hover:bg-beige'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-softBrown mb-4">No products found.</p>
            <p className="text-softBrown">Please check back later or add some products in the admin dashboard.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;