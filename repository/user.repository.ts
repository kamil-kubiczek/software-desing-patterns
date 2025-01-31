import { SqlClient } from "./sql.client"
import { UserEntity } from "./user.entity"

export class UserRepository {
   constructor(private readonly sqlClient: SqlClient) {
      this.sqlClient.connect()
   }
   getById(id: string) {
      const user = this.sqlClient.execute(`SELECT * FROM users WHERE id = ${id}`)
      return new UserEntity({ ...user })
   }

   getByEmail(email: string) {
      const user = this.sqlClient.execute(`SELECT * FROM users WHERE email = ${email}`)

      return new UserEntity({ ...user })
   }

   save(user: UserEntity) {
      this.sqlClient.execute(
         `INSERT INTO users (id, email, name, password) VALUES (${user.id}, ${user.email}, ${user.name}, ${user.password})`
      )
   }
}
