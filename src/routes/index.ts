import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'ok' });
});


router.get('/hello', (_req, res) => {
  res.json({ message: 'hillo' });
});


export default router;
