import { UserEntity } from "./user.entity"

export interface IUserDao {
   create(user: UserEntity): void
   getById(id: string): void
}
