import {Router} from 'express';
import {CreateUserController} from "./controllers/CreateUserController";
import { LoginController } from './controllers/LoginController';
import { addPokeController } from './controllers/addpokesController';
import {VerifyLogin} from './middlewares/VerifyLogin'; 

const router = Router();

const createUserController = new CreateUserController();
const loginController = new LoginController();
const AddPokeController = new addPokeController();

router.post('/newUser', createUserController.handle);
router.post('/login', loginController.handle);
router.post('/addPoke',VerifyLogin, AddPokeController.handle)

export {router}