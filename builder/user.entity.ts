import { AddressValueObject } from "./address.vo"
import { PasswordValueObject } from "./password.vo"

export class UserEntity {
   id: string
   name: string
   email: string
   password: PasswordValueObject
   address: AddressValueObject

   constructor(id: string, name: string) {
      this.id = id
      this.name = name
   }

   getId() {
      return this.id
   }
}
