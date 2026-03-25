// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brown text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">BuddhaArt Gallery</h3>
            <p className="text-sm text-cream/80">
              Bringing the finest Buddhist art and artifacts to collectors and spiritual enthusiasts worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-cream/80 hover:text-gold transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore?category=statue" className="text-cream/80 hover:text-gold transition-colors">
                  Statues
                </Link>
              </li>
              <li>
                <Link to="/explore?category=painting" className="text-cream/80 hover:text-gold transition-colors">
                  Paintings
                </Link>
              </li>
              <li>
                <Link to="/explore?category=accessory" className="text-cream/80 hover:text-gold transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-cream/80">
              <li>123 Buddha Art Gallery St</li>
              <li>Chennai, CH - 600001</li>
              <li>Email: info@buddhartgallery.com</li>
              <li>Phone: +91 98765 43210</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} BuddhaArt Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;