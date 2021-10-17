import { Router } from 'express';
import { AuthenticateUserController } from './modules/user/useCases/AuthenticateUser/AuthenticateUserController';
import { AccessesController } from './modules/user/useCases/createAccessUser/AccessesController';
import { ensureAuthenticated } from '../src/middlewares/EnsureAuthenticated'
import { SendMailUserController } from './modules/user/useCases/sendMailUser/SendMailUserController';

const router = Router();


const accessesController = new AccessesController();
const authenticateUserController = new AuthenticateUserController();
const sendMailUserController = new SendMailUserController();


router.post('/access', accessesController.handle);
router.post('/logar', authenticateUserController.handle);
router.get('/list', ensureAuthenticated, (req, res) => {
    res.status(200).json({
        message: 'Approved access'
    })
});


router.post('/message', sendMailUserController.handle);

export { router };