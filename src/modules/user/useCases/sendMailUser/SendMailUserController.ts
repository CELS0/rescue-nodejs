import { Request, Response } from "express";
import { SendMailUserUseCase } from './SendMailUserUseCase'
import { NodemailerProvider } from '../../../../provider/nodemailer/implements/NodemailerProvider'

export class SendMailUserController {

    async handle(req: Request, res: Response) {
        const nodemailerProvider = new NodemailerProvider();
        const sendMailUserUseCase = new SendMailUserUseCase(nodemailerProvider);
        try {
           await sendMailUserUseCase.execute()
            res.status(201).json({
                message: 'ok'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message,
            })
        }
    }
}