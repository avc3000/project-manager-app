import mongoose from 'mongoose';
import { MONGO_URI, OPTIONS } from './config.js';

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(MONGO_URI, OPTIONS);
    console.log(`MongoDb Connect: ${conn.connection.name}`);
  } catch (error) {
    console.error(`MongoDb Connect: ${error.message}`);
    process.exit(1);
  }
};