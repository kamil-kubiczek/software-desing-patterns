import { IUserDao } from "./user.dao.interface"
import { UserEntity } from "./user.entity"

export class UserDao implements IUserDao {
   constructor() {}

   create(user: UserEntity) {
      console.log("user created in db using sql client")
   }

   getById(id: string) {
      console.log("user found in db usin sql client", id)
   }
}
