import { IUserEntity } from "./user.entity.interface"

export class UserRepository {
   initializeInSystem(user: IUserEntity) {
      console.log("user created in system", user)
   }

   deleteFromSystem(user: IUserEntity) {
      console.log("user deleted from system", user)
   }
}
