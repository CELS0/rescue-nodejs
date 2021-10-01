import { IAccessDTO } from "../dtos/IAccessDTO";
import { Access } from "../infra/typeorm/entities/Access";

export interface IAccessesRepository{
    store(data: IAccessDTO): Promise<void>,
    findByEmail(email: string): Promise<Access>,
}