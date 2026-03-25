// simple-server.js
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Test users
const users = [
  {
    _id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  }
];

// Login endpoint
app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const token = jwt.sign({ id: user._id }, 'secret123', { expiresIn: '30d' });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: token
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Profile endpoint
app.get('/api/users/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token' });
  }
  
  try {
    const decoded = jwt.verify(token, 'secret123');
    const user = users.find(u => u._id === decoded.id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      });
    } else {
      res.status(401).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Products endpoint
app.get('/api/products', (req, res) => {
  res.json([
    { _id: '1', name: 'Buddha Statue', price: 99.99, category: 'statue', image: 'https://via.placeholder.com/300', description: 'Beautiful Buddha statue' },
    { _id: '2', name: 'Meditation Cushion', price: 49.99, category: 'accessory', image: 'https://via.placeholder.com/300', description: 'Comfortable meditation cushion' },
    { _id: '3', name: 'Tibetan Singing Bowl', price: 79.99, category: 'accessory', image: 'https://via.placeholder.com/300', description: 'Authentic Tibetan singing bowl' }
  ]);
});

// Cart endpoints (simple)
app.get('/api/cart', (req, res) => {
  res.json({ products: [], total: 0 });
});

app.post('/api/cart/add', (req, res) => {
  res.json({ products: [], total: 0 });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Test server running on http://localhost:${PORT}`);
  console.log(`Login with: admin@example.com / admin123`);
});