import { Router } from 'express';
import { getGame, setPlayers, setGame, resetGame } from '../controllers/gameController.js';

const router = Router();

router.post('/players', setPlayers);

router.get('/game', getGame);

router.post('/game', setGame);

router.delete('/game', resetGame);

export default router;
