import { IAccessDTO } from '../../dtos/IAccessDTO';
import { IAccessesRepository } from '../../repositories/IAccessesRepository'
import { hash } from "bcryptjs"
import { ISpekeasyProvaider } from '../../../../provider/speakeasy/ISpekeasyProvider';
import { IQrcodeProvider } from '../../../../provider/qrcode/IQrcodeProvider';

class AccessesUseCase {
    constructor(
        private accessesRepository: IAccessesRepository,
        private spekeasyProvaider: ISpekeasyProvaider,
        private qrcodeProvider: IQrcodeProvider,
    ) {
        this.accessesRepository = accessesRepository;
        this.spekeasyProvaider = spekeasyProvaider;
        this.qrcodeProvider = qrcodeProvider;
    }
    async create(data: IAccessDTO): Promise<string> {
        const userExist = await this.accessesRepository.findByEmail(data.email);
        if (!userExist) {
            const newData = {
                email: data.email,
                password: await hash(data.password, 9)
            }
            try {
                await this.accessesRepository.store(newData)

                const secret = await this.spekeasyProvaider.generate();
                const qrcode = await this.qrcodeProvider.generate(secret.otpauth_url);

                return qrcode;
            } catch (err) {

            }
        } else {
            throw new Error('Usuário já existe')
        }
    }
}
export { AccessesUseCase }