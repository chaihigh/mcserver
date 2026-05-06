import express from 'express';
import cors from 'cors';
import { Env } from './env';
import { connectDb } from './db';
import router from './routes';

const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'http://164.92.157.191:3000'] }));
app.use(express.json());
app.use(router);

(async () => {
  try {
    await connectDb();

    app.listen(Env.port, () => {
      console.log(`Server running on port ${Env.port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
})();
