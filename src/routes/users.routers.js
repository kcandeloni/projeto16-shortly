import express from 'express';
import createUsers from '../controllers/users_controllers/createUsers.controllers.js';
import valideteUser from '../middlewares/validadeSignUp.middlewares.js';

const userRouter = express.Router();
userRouter.post('/signup', valideteUser, createUsers);

export default userRouter;