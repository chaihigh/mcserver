export const Env = {
  port: process.env['PORT'] ?? 3001,
  mongoUri: process.env['MONGO_URI'] ?? 'mongodb://localhost:27017/mcserver',
} as const;