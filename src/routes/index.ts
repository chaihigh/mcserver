import { Router } from 'express';
import waypointRouter from './waypoints';
import gameThoughtRouter from './gamethoughts';

const router = Router();

router.use('/waypoints', waypointRouter);
router.use('/gamethoughts', gameThoughtRouter);

export default router;
