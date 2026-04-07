import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="http://localhost:5173/images/buddha9.jpg"
            alt="Meditation"
            className="w-full h-500px object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            About <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl max-w-2xl">
            Discover the story behind Buddha Art Gallery and our mission to bring peace through art
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
              Our <span className="text-gold">Story</span>
            </h2>
            <p className="text-softBrown mb-6 leading-relaxed">
              Buddha Art Gallery was founded with a simple mission: to bring the peace and serenity of Buddhist art 
              into homes and spaces around the world. We believe that art has the power to transform not just spaces, 
              but also the minds and hearts of those who experience it.
            </p>
            <p className="text-softBrown mb-6 leading-relaxed">
              Our collection features handcrafted Buddha statues, spiritual paintings, and sacred artifacts sourced 
              from skilled artisans who have dedicated their lives to this craft. Each piece carries with it centuries 
              of tradition and spiritual significance.
            </p>
            <p className="text-softBrown leading-relaxed">
              Whether you're a seasoned practitioner or simply someone who appreciates beautiful art, we invite you 
              to explore our collection and find a piece that speaks to your soul.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Our <span className="text-gold">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Authenticity</h3>
              <p className="text-softBrown">
                Every piece in our collection is authentic and handcrafted by skilled artisans
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Mindfulness</h3>
              <p className="text-softBrown">
                We promote mindfulness and spiritual growth through sacred art
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Community</h3>
              <p className="text-softBrown">
                We support artisan communities and preserve traditional craftsmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brown text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Find Your Peace?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our collection and bring the serenity of Buddhist art into your space
          </p>
          <Link to="/explore" className="btn-primary inline-block">
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

