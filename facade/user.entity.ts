import { IUserEntity } from "./user.entity.interface"

export class UserEntity implements IUserEntity {
   constructor(public id: string, public name: string, public email: string, public password: string) {}
}
