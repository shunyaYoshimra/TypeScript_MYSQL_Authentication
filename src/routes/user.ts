import { Router } from 'express';
const router = Router();

// Setting Routes
router.post('/signup');
router.post('/login');
router.get('getme');
router.get("login");

export default router;
