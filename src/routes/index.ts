import { Router } from 'express';
import waypointRouter from './waypoints';

const router = Router();

router.use('/waypoints', waypointRouter);

export default router;
