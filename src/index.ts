import express from 'express';
import cors from 'cors';
import {Env} from "./env";
import router from './routes';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/', router);

app.listen(Env.port, () => {
  console.log(`Server running on port ${Env.port}`);
});
