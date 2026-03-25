const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace with your actual MongoDB Atlas connection string
    const conn = await mongoose.connect('mongodb+srv://mgkalpitaa_db_user:vAbzQ2HAjifFtqW5@cluster0.wbcrjpy.mongodb.net/buddha_art_gallery?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;