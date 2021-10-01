import { AccessesRepository } from "../../infra/typeorm/repositories/AccessesRepository";
import { AccessesUseCase } from "../createAccessUser/AccessesUseCase";

let accessesRepository: AccessesRepository;
let accessesUseCase: AccessesUseCase

class AuthenticateUserController {
    constructor(){
        accessesRepository = new AccessesRepository();
        accessesUseCase = new  AccessesUseCase(accessesRepository);
    }
async handle(req: Request, res: Response) {
    try {
        const data = {
            email: req.body.email,
            password: req.body.password,
        }
        await accessesUseCase.create(data);
        return res.status(201).json('ok');
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}
}

export { AuthenticateUserController }