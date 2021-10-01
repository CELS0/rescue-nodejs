import {Router} from 'express';
import { AuthenticateUserController } from './modules/user/useCases/AuthenticateUser/AuthenticateUserController';
import { AccessesController } from './modules/user/useCases/createAccessUser/AccessesController';
import {ensureAuthenticated} from '../src/middlewares/EnsureAuthenticated'
const router =  Router();


const accessesController = new AccessesController();
const authenticateUserController = new AuthenticateUserController();

router.post('/access',accessesController.handle);
router.post('/logar', authenticateUserController.handle);
router.get('/list',ensureAuthenticated ,(req, res) => {
    res.status(200).json({
        message: 'Approved access'
    })
});

export{router};