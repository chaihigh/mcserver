import { Router } from 'express';
import { WaypointModel } from '../models/Waypoint';

const router = Router();

router.get('/', async (_req, res) => {
  const waypoints = await WaypointModel.find();
  res.json(waypoints);
});

router.post('/', async (req, res) => {
  const waypoint = await WaypointModel.create(req.body);
  res.json(waypoint);
});

router.delete('/', async (_req, res) => {
  await WaypointModel.deleteMany();
  res.json([]);
});

router.delete('/:id', async (req, res) => {
  await WaypointModel.findByIdAndDelete(req.params.id);
  res.json(null);
});

export default router;
