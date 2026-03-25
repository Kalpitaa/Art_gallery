// pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-brown text-center mb-8">
            Contact Us
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-brown mb-4">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-brown">123 Buddha Art Gallery St,<br />Chennai, CH - 600001</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-brown">info@buddhartgallery.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-brown">+91 98765 43210</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Hours</p>
                    <p className="text-brown">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-brown mb-4">
                  Send a Message
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brown mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-beige rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-beige rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown mb-1">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-3 py-2 border border-beige rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;