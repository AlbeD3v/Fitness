import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any)._mongoose || {};

if (!cached.promise) {
  cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
    return mongoose;
  });
}

async function dbConnect() {
  if (!cached.conn) {
    cached.conn = await cached.promise;
  }
  return cached.conn;
}

export default dbConnect;
