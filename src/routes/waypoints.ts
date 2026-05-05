import { Router } from 'express';
import { FileStorage } from '../fileStorage';

const WaypointStorage = new FileStorage<{
  id: number,
  name: string,
  coord: {
    x: number,
    y: number,
    z: number,
  }
}>('data/waypoints.json');

const router = Router();

router.get('/', (_req, res) => {
  const waypoints = WaypointStorage.getAll();
  res.json(waypoints);
});

router.post('/', (req, res) => {
  const waypoint = WaypointStorage.create(req.body);
  res.json(waypoint);
});

router.delete('/', (req, res) => {
  WaypointStorage.clear();
  res.json([]);
})

router.delete('/:id', (req, res) => {
  WaypointStorage.delete(req.params.id);
  res.json(null);
})

export default router;
