import { Contractor } from "./contractor.interface"

export class Company implements Contractor {
   constructor(private readonly companyName: string, private readonly vatId: string) {}

   getBillingIdentifier() {
      return this.vatId
   }

   getBillingName() {
      return this.companyName
   }
}
