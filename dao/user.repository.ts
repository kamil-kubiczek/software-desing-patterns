import { IUserDao } from "./user.dao.interface"
import { UserEntity } from "./user.entity"

export class UserRepository {
   constructor(private readonly userDao: IUserDao) {}
   register(user: UserEntity) {
      this.userDao.create(user)
   }

   getById(id: UserEntity["id"]) {
      this.userDao.getById(id)
   }
}
