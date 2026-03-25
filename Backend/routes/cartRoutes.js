const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const { protect } = require('../middleware/authMiddleware');

// Get user cart
router.get('/', protect, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user._id })
      .populate('products.productId');
    
    if (!cart) {
      cart = await Cart.create({ userId: req.user._id, products: [] });
    }
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add to cart
router.post('/add', protect, async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    
    let cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      cart = await Cart.create({
        userId: req.user._id,
        products: [{ productId, quantity }]
      });
    } else {
      const productIndex = cart.products.findIndex(
        p => p.productId.toString() === productId
      );
      
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
      
      cart.updatedAt = Date.now();
      await cart.save();
    }
    
    await cart.populate('products.productId');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove from cart
router.delete('/remove/:productId', protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.products = cart.products.filter(
      p => p.productId.toString() !== req.params.productId
    );
    
    cart.updatedAt = Date.now();
    await cart.save();
    
    await cart.populate('products.productId');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update quantity
router.put('/update/:productId', protect, async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const productIndex = cart.products.findIndex(
      p => p.productId.toString() === req.params.productId
    );
    
    if (productIndex > -1) {
      cart.products[productIndex].quantity = quantity;
      cart.updatedAt = Date.now();
      await cart.save();
    }
    
    await cart.populate('products.productId');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;