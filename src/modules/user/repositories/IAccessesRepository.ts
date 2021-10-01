import { IAccessDTO } from "../dtos/IAccessDTO";

export interface IAccessesRepository{
    store(data: IAccessDTO): Promise<void>,
    findByEmail(email: string): Promise<void>,
}