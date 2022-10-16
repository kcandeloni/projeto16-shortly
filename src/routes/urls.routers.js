import express from 'express';
import authUser from '../middlewares/authUsers.middlewares.js'
import setUrl from '../controllers/urlsControllers/setUrl.controllers.js'
import validateUrl from '../middlewares/validateUrl.middlewares.js';

const urlsRouter = express.Router();
urlsRouter.post('/urls/shorten', authUser, validateUrl, setUrl);

export default urlsRouter;