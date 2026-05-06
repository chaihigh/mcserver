import express from 'express';
import cors from 'cors';
import { Env } from './env';
import { connectDb } from './db';
import router from './routes';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(router);

connectDb().then(() => {
  app.listen(Env.port, () => {
    console.log(`Server running on port ${Env.port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1);
});
