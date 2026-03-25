import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setFeaturedProducts(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="http://localhost:5173/images/buddha5.jpg"
            alt="Buddha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              Discover Divine Serenity Through Sacred Art
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Explore our collection of handcrafted Buddha statues and spiritual paintings
            </p>
            <Link to="/explore" className="btn-primary inline-block text-lg">
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Featured <span className="text-gold">Collection</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="http://localhost:5173/images/buddha10.jpg"
                alt="Meditation"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Our <span className="text-gold">Story</span>
              </h2>
              <p className="text-softBrown mb-6 leading-relaxed">
                At Buddha Art Gallery, we believe in the power of sacred art to transform spaces and souls. 
                Each piece in our collection is carefully curated to bring peace, harmony, and spiritual 
                energy to your home or meditation space.
              </p>
              <Link to="/about" className="btn-secondary inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
