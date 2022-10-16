import express from 'express';
import authUser from '../middlewares/authUsers.middlewares.js'
import setUrl from '../controllers/urlsControllers/setUrl.controllers.js'
import validateUrl from '../middlewares/validateUrl.middlewares.js';
import getUrlbyId from '../controllers/urlsControllers/getUrl.controllers.js';

const urlsRouter = express.Router();
urlsRouter.get('/urls/:id', getUrlbyId);
urlsRouter.post('/urls/shorten', authUser, validateUrl, setUrl);

export default urlsRouter;