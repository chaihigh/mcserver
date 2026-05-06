import mongoose from 'mongoose';
import { Env } from './env';

export async function connectDb(): Promise<void> {
  await mongoose.connect(Env.mongoUri);
  console.log(`MongoDB connected: ${mongoose.connection.host}`);
}
