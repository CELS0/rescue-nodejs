import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { DBManager } from "../../../../../database";
import { IAccessDTO } from "../../../dtos/IAccessDTO";
import { IAccessesRepository } from "../../../repositories/IAccessesRepository";
import { Access } from "../entities/Access";

@EntityRepository(Access)
class AccessesRepository extends Repository<Access> implements IAccessesRepository {
    async findByEmail(email: string): Promise<void> {
        const connection = await DBManager.getConnection();
        const repository = connection.getCustomRepository(AccessesRepository);
        const userExist = await repository.findOne({email});
        if (userExist) {
            throw new Error('Usuário ou senha incorreta')
        }

    }
    async store(data: IAccessDTO): Promise<void> {
        const connection = await DBManager.getConnection();
        const repository = connection.getCustomRepository(AccessesRepository);

        try {
            const login = repository.create(data);
            await repository.save(login);
        } catch (err) {
            throw new Error(err)
        }
    }
}
export { AccessesRepository }