import { IAccessDTO } from "../../dtos/IAccessDTO";
import { IAccessesRepository } from "../../repositories/IAccessesRepository";
import {compare} from 'bcryptjs'
import { GenerateToken } from "../../../../provider/GenerateToken";

class AuthenteUserUseCase {
    constructor(
        private accessesRepository: IAccessesRepository,
    ) {
        this.accessesRepository = accessesRepository;
    }
    
    async logar(data: IAccessDTO) {
        const generateToken = new GenerateToken();
        const userExist = await this.accessesRepository.findByEmail(data.email);
        if (!userExist) {
            throw new Error('User or password incorrect')
        } 

        const passwordMatch = await compare(data.password, userExist.password);

        if (!passwordMatch) {
            throw new Error("User or password incorrect")
        }
        const token = generateToken.execute((userExist.id).toString());

        return token;
    }
}

export { AuthenteUserUseCase }