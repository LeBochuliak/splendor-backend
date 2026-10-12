import { Router } from 'express';
import { takeTokens, returnTokens } from '../controllers/actionsController.js';

const router = Router();

router.patch('/action/tokens/takeTokens', takeTokens);

router.patch('/action/tokens/returnTokens', returnTokens);

export default router;
