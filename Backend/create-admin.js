// create-admin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust path as needed

// Your MongoDB connection string (copy from your .env or config)
const MONGODB_URI = 'mongodb+srv://ac_feay3i5:yourpassword@cluster.wbcrjpy.mongodb.net/your-database?retryWrites=true&w=majority';

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    
    if (existingAdmin) {
      console.log('Admin user found, updating role...');
      existingAdmin.role = 'admin';
      await existingAdmin.save();
      console.log('✅ User updated to admin!');
      console.log('Email:', existingAdmin.email);
      console.log('Role:', existingAdmin.role);
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const admin = new User({
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin'
      });
      
      await admin.save();
      console.log('✅ Admin user created successfully!');
      console.log('Email: admin@example.com');
      console.log('Password: admin123');
      console.log('Role: admin');
    }

    // List all users to verify
    const allUsers = await User.find({}, 'name email role');
    console.log('\nAll users in database:');
    allUsers.forEach(user => {
      console.log(`- ${user.email} (${user.role || 'no role'})`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  }
};

createAdmin();