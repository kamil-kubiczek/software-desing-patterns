export class UserEntity {
   constructor(public id: string, public name: string, public email: string, public password: string) {}

   compare(user: UserEntity) {
      return this.id === user.id
   }
}
