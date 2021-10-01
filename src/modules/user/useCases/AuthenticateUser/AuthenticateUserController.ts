import { Request, Response } from 'express';
import { AccessesRepository } from "../../infra/typeorm/repositories/AccessesRepository";
import { AccessesUseCase } from "../createAccessUser/AccessesUseCase";
import { AuthenteUserUseCase } from "./AuthenticateUserUseCase";

let accessesRepository: AccessesRepository;
let authenteUserUseCase: AuthenteUserUseCase;

class AuthenticateUserController {
    constructor() {
        accessesRepository = new AccessesRepository();
        authenteUserUseCase = new AuthenteUserUseCase(accessesRepository);
    }
    async handle(req: Request, res: Response) {
        try {
            const data = {
                email: req.body.email,
                password: req.body.password,
            }
            const token = await authenteUserUseCase.logar(data);
            return res.status(201).json(token);
        }
        catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    }
}

export { AuthenticateUserController }