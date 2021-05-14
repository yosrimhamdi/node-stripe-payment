import { Router } from 'express';
import session from '../controllers/sesssion';
import success from '../controllers/success';
import failed from '../controllers/failed';
import webhook from '../controllers/webhook';

const router = Router();

router.post('/webhook', webhook);
router.post('/session', session);
router.get('/success', success);
router.get('/failed', failed);

export default router;
