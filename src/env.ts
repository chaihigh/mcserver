import 'dotenv/config';

export const Env = {
  port: process.env.PORT ?? 3001,
  mongoUri: process.env.MONGO_URI ?? 'mongodb://localhost:27017/server',
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD,
} as const;
