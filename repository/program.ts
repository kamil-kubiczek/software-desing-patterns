import { SqlClient } from "./sql.client"
import { UserEntity } from "./user.entity"
import { UserRepository } from "./user.repository"

const user = new UserEntity({
   email: "5e2o3@example.com",
   id: "1",
   name: "John Doe",
   password: "password"
})

new UserRepository(new SqlClient()).save(user)

console.log("User saved using repository")
