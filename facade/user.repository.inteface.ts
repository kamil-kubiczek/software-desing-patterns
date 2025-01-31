import { IUserEntity } from "./user.entity.interface"

export interface IUserRepository {
   initializeInSystem(user: IUserEntity): void
   deleteFromSystem(user: IUserEntity): void
}
