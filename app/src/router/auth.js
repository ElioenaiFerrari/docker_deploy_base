import AuthController from '@/controllers/auth';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/signup', AuthController.signup);
authRouter.post('/signin', AuthController.signin);

export default (app) => app.use('/auth', authRouter);
