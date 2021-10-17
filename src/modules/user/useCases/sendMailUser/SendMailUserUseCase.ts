import { INodemailerProvider } from '../../../../provider/nodemailer/INodemailerProvider'


class SendMailUserUseCase {
    constructor(
        private nodemailerProvider: INodemailerProvider,
    ) { }
    async execute() {
        await this.nodemailerProvider.sendMail({
            to: {
                name: 'example',
                email: 'example@gmail.com',
            },
            from: {
                name: 'example',
                email: 'example@example',
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        });
    }
}

export { SendMailUserUseCase }