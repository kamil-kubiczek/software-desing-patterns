import { UserEntity } from "./user.entity"

export class AuthorizationService {
   hasPermissionToRegister(user: UserEntity) {
      if (user.email != "5e2o3@example.com") return false
      return true
   }
}
