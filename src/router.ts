import {Router} from 'express';
import { AccessesController } from './modules/user/useCases/createAccessUser/AccessesController';
const router =  Router();


const accessesController = new AccessesController();

router.post('/access',accessesController.handle)

export{router};