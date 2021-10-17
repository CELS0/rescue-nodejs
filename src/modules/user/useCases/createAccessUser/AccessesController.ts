import { Request, Response } from 'express';
import { AccessesUseCase } from "./AccessesUseCase";
import { AccessesRepository } from '../../infra/typeorm/repositories/AccessesRepository'
import { QrcodeProvider } from '../../../../provider/qrcode/implements/QrcodeProvider';
import { SpekeasyProvaider } from '../../../../provider/speakeasy/implementes/SpekeasyProvaider';

let accessesRepository: AccessesRepository;
let accessesUseCase: AccessesUseCase
let qrcodeProvider: QrcodeProvider;
let spekeasyProvaider: SpekeasyProvaider;

class AccessesController {
    constructor() {
        accessesRepository = new AccessesRepository();
        qrcodeProvider = new QrcodeProvider();
        spekeasyProvaider = new SpekeasyProvaider();
        accessesUseCase = new AccessesUseCase(accessesRepository, spekeasyProvaider, qrcodeProvider);
    }
    async handle(req: Request, res: Response) {
        try {
            const data = {
                email: req.body.email,
                password: req.body.password,
            }
           const qrcode = await accessesUseCase.create(data);
            return res.status(201).type('html').json(qrcode);
        }
        catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    }
}
export { AccessesController }