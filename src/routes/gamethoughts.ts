import { Router } from 'express';
import { GameThoughtModel } from '../models/GameThought';

const router = Router();

router.get('/', async (_req, res) => {
  const gameThoughts = await GameThoughtModel.find();
  res.json(gameThoughts);
});

router.post('/', async (req, res) => {
  const gameThought = await GameThoughtModel.create(req.body);
  res.json(gameThought);
});

router.delete('/', async (_req, res) => {
  await GameThoughtModel.deleteMany();
  res.json([]);
});

router.delete('/:id', async (req, res) => {
  await GameThoughtModel.findByIdAndDelete(req.params.id);
  res.json(null);
});

export default router;
