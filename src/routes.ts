import {Router} from 'express';
import {CreateUserController} from "./controllers/CreateUserController";
import { LoginController } from './controllers/LoginController';

const router = Router();

const createUserController = new CreateUserController();
const loginController = new LoginController();

router.post('/newUser', createUserController.handle);
router.post('/login', loginController.handle);

export {router}