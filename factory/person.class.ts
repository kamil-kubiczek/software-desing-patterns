import { Contractor } from "./contractor.interface"

export class Person implements Contractor {
   constructor(private readonly firstName: string, private readonly lastName: string, private readonly uniqueId: string) {}

   getBillingIdentifier() {
      return this.uniqueId
   }

   getBillingName() {
      return `${this.firstName} ${this.lastName}`
   }
}
