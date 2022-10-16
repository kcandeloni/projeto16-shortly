import express from 'express';
import createUsers from '../controllers/users_controllers/createUsers.controllers.js';
import valideteUser from '../middlewares/validadeSignUp.middlewares.js';
import validaSignIn from '../middlewares/valideSignIn.middlewares.js';
import login from '../controllers/users_controllers/login.controllers.js';

const userRouter = express.Router();
userRouter.post('/signup', valideteUser, createUsers);
userRouter.post('/signin', validaSignIn, login);

export default userRouter;