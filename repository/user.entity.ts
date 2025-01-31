export class UserEntity {
   id: string
   name: string
   email: string
   password: string

   constructor(params: { id: string; name: string; email: string; password: string }) {
      this.id = params.id
      this.name = params.name
      this.email = params.email
      this.password = params.password
   }

   compare(user: UserEntity) {
      return this.id === user.id
   }
}
