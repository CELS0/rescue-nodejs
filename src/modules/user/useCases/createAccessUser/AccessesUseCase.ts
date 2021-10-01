import { IAccessDTO } from '../../dtos/IAccessDTO';
import { IAccessesRepository } from '../../repositories/IAccessesRepository'
import { hash } from "bcryptjs"

class AccessesUseCase {
    constructor(
        private accessesRepository: IAccessesRepository,
    ) {
        this.accessesRepository = accessesRepository;
    }
    async create(data: IAccessDTO): Promise<void> {
        const userExist = await this.accessesRepository.findByEmail(data.email);
        if (!userExist) {
            const newData = {
                email: data.email,
                password: await hash(data.password, 9)
            }
            await this.accessesRepository.store(newData)
        } else {
            throw new Error('Usuário já existe')
        }
    }
}
export { AccessesUseCase }