import { INodemailerProvider } from '../../../../provider/nodemailer/INodemailerProvider'


class SendMailUserUseCase {
    constructor(
        private nodemailerProvider: INodemailerProvider,
    ) { }
    async execute(name: string, email: string, subject: string, body: string) {
        await this.nodemailerProvider.sendMail({
            to: {
                name,
                email,
            },
            from: {
                name: process.env.AWS_FROM_NAME,
                email: process.env.AWS_FROM_EMAIL,
            },
            subject,
            body,
        });
    }
}

export { SendMailUserUseCase }