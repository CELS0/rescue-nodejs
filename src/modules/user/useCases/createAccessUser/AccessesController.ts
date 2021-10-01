import { Request, Response } from 'express';
import { AccessesUseCase } from "./AccessesUseCase";
import { AccessesRepository } from '../../infra/typeorm/repositories/AccessesRepository'

let accessesRepository: AccessesRepository;
let accessesUseCase: AccessesUseCase

class AccessesController {
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
export { AccessesController }