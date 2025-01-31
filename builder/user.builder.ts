import { AddressValueObject } from "./address.vo"
import { PasswordValueObject } from "./password.vo"
import { UserEntity } from "./user.entity"

export class UserBuilder {
   user: UserEntity

   constructor(name: string) {
      this.user = new UserEntity(String(Math.random()), name)
   }

   build() {
      return this.user
   }

   setAddress(address: AddressValueObject) {
      this.user.address = address
      return this
   }

   setEmail(email: string) {
      this.user.email = email
      return this
   }

   setPassword(password: PasswordValueObject) {
      this.user.password = password
      return this
   }
}
