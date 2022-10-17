import express from 'express';
import createUsers from '../controllers/usersControllers/createUsers.controllers.js';
import valideteUser from '../middlewares/validateSignUp.middlewares.js';
import validateSignIn from '../middlewares/validateSignIn.middlewares.js';
import login from '../controllers/usersControllers/login.controllers.js';

import authUser from '../middlewares/authUsers.middlewares.js';
import myUrls from '../controllers/usersControllers/getMyUrls.controllers.js';
import getRanking from '../controllers/usersControllers/getRancking.controllers.js';

const userRouter = express.Router();
userRouter.post('/signup', valideteUser, createUsers);
userRouter.post('/signin', validateSignIn, login);

userRouter.get('/users/me', authUser, myUrls);
userRouter.get('/ranking', getRanking);

export default userRouter;