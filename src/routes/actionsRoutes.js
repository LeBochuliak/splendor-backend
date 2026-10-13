import { Router } from 'express';
import {
  takeTokens,
  returnTokens,
  reserveBoardCard,
  reserveDeckCard,
  buyCard,
} from '../controllers/actionsController.js';

const router = Router();

router.patch('/action/tokens/takeTokens', takeTokens);

router.patch('/action/tokens/returnTokens', returnTokens);

router.patch('/action/cards/reserveBoardCard', reserveBoardCard);

router.patch('/action/cards/reserveDeckCard', reserveDeckCard);

router.patch('/action/cards/buyCard', buyCard);

export default router;
