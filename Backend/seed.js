const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

// Sample products data
const products = [
  {
    name: "Meditating Buddha Statue",
    price: 1299.99,
    description: "A beautiful handcrafted meditating Buddha statue made from high-quality resin. Perfect for your meditation space or home altar.",
    image: "http://localhost:5173/images/buddha1.jpg",
    category: "statue"
  },
  {
    name: "Golden Buddha Painting",
    price: 899.99,
    description: "Stunning canvas print of a golden Buddha against a serene background. Adds a touch of spirituality to any room.",
    image: "http://localhost:5173/images/buddha2.jpg",
    category: "painting"
  },
  {
    name: "Laughing Buddha Statue",
    price: 797.99,
    description: "Traditional laughing Buddha statue symbolizing happiness and abundance. Made from polyresin with hand-painted details.",
    image: "http://localhost:5173/images/buddha3.jpg",
    category: "statue"
  },
  {
    name: "Zen Garden Painting",
    price: 1495.99,
    description: "Large canvas painting depicting a peaceful Zen garden with Buddha silhouette. Hand-painted by skilled artists.",
    image: "http://localhost:5173/images/buddha4.jpg",
    category: "painting"
  },
  {
    name: "Buddha Head Statue",
    price: 5940.99,
    description: "Elegant Buddha head statue made from aged stone finish resin. Perfect for shelf or table display.",
    image: "http://localhost:5173/images/buddha5.jpg",
    category: "statue"
  },
  {
    name: "Meditation Cushion",
    price: 399.99,
    description: "Comfortable zafu meditation cushion filled with buckwheat hulls. Helps maintain proper posture during meditation.",
    image: "http://localhost:5173/images/buddha6.jpg",
    category: "accessory"
  },
  {
    name: "Tibetan Prayer Flags",
    price: 245679,
    description: "Colorful Tibetan prayer flags with traditional mantras. Bring positive energy to your space.",
    image: "http://localhost:5173/images/buddha7.jpg",
    category: "accessory"
  },
  {
    name: "Buddha Wall Art",
    price: 199.99,
    description: "Large metal wall art depicting Buddha in lotus position. Handcrafted from recycled metal.",
    image: "http://localhost:5173/images/buddha8.jpg",
    category: "painting"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert new products
    await Product.insertMany(products);
    console.log('Added sample products successfully!');
    
    // Disconnect
    await mongoose.disconnect();
    console.log('Database disconnected');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();