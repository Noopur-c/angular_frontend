import { connect } from 'mongoose';
require('dotenv').config();

const connectMongo = async () => {
  try {
    await connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default connectMongo;
