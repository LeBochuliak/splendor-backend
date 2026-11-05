import { Router } from 'express';
import { getGame, setPlayers } from '../controllers/gameController.js';

const router = Router();

router.post('/players', setPlayers);

router.get('/game', getGame);

export default router;
