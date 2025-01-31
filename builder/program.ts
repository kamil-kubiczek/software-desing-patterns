import { AddressValueObject } from "./address.vo"
import { PasswordValueObject } from "./password.vo"
import { UserBuilder } from "./user.builder"

const userBuilder = new UserBuilder("John Doe")

userBuilder
   .setEmail("5e2o3@example.com")
   .setPassword(new PasswordValueObject("asdf"))
   .setAddress(new AddressValueObject("123 Main St", "Anytown", "USA", "12345"))

const user = userBuilder.build()

console.log(user)
