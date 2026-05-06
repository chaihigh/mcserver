import mongoose from 'mongoose';
import { Env } from './env';

export async function connectDb(): Promise<void> {
  const options: mongoose.ConnectOptions =
    process.env.NODE_ENV === 'production'
      ? { user: Env.mongoUser, pass: Env.mongoPassword }
      : {};
  await mongoose.connect(Env.mongoUri, options);
  console.log(`MongoDB connected with options ${mongoose.connection.host}`);
}
