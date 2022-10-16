import express from 'express';
import usersRouter from './users.routers.js';
import urlsRouter from './urls.routers.js';

const router = express.Router();
router.use(usersRouter);
router.use(urlsRouter);
export default router;