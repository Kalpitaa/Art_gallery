// components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount = 0 } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-brown">
            Buddha<span className="text-gold">Art</span> Gallery
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <Link to="/explore" className="hover:text-gold transition-colors">Explore</Link>
            <Link to="/about" className="hover:text-gold transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
            
            {/* Cart */}
            <Link to="/cart" className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth Links */}
            {user ? (
              <div className="flex items-center space-x-4">
                {/* Dashboard link - Show for ALL logged in users */}
                <Link 
                  to="/dashboard" 
                  className="bg-gold text-white px-3 py-1 rounded-lg hover:bg-gold/90 transition-colors font-semibold"
                >
                  Dashboard
                </Link>
                
                <span className="text-brown">Hi, {user.name}</span>
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="bg-gold text-white px-4 py-1 rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="hover:text-gold transition-colors">Login</Link>
                <Link
                  to="/register"
                  className="bg-gold text-white px-4 py-1 rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;