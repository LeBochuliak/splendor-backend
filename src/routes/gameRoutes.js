import { Router } from 'express';
import { getGame, setPlayer } from '../controllers/gameController.js';

const router = Router();

router.post('/player', setPlayer);

router.get('/game', getGame);

export default router;
