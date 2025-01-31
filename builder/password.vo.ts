export class PasswordValueObject {
   constructor(public value: string) {
      if (!value) throw new Error("Password is invalid")

      if (value.match(/[^a-zA-Z0-9]/)) throw new Error("Password is invalid")
   }
}
