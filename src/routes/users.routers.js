import express from 'express';
import createUsers from '../controllers/usersControllers/createUsers.controllers.js';
import valideteUser from '../middlewares/validateSignUp.middlewares.js';
import validateSignIn from '../middlewares/validateSignIn.middlewares.js';
import login from '../controllers/usersControllers/login.controllers.js';

const userRouter = express.Router();
userRouter.post('/signup', valideteUser, createUsers);
userRouter.post('/signin', validateSignIn, login);

export default userRouter;