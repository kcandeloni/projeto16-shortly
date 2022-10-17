import express from 'express';

import authUser from '../middlewares/authUsers.middlewares.js'

import setUrl from '../controllers/urlsControllers/setUrl.controllers.js'
import validateUrl from '../middlewares/validateUrl.middlewares.js';
import getUrlbyId from '../controllers/urlsControllers/getUrl.controllers.js';
import openUrl from '../controllers/urlsControllers/openUrl.controllers.js';
import deleteUrl from '../controllers/urlsControllers/deleteUrl.controllers.js';

const urlsRouter = express.Router();
urlsRouter.get('/urls/:id', getUrlbyId);
urlsRouter.get('/urls/open/:shortUrl', openUrl);
urlsRouter.post('/urls/shorten', authUser, validateUrl, setUrl);
urlsRouter.delete('/urls/:id', authUser, deleteUrl);

export default urlsRouter;