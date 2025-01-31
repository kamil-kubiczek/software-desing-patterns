export class AddressValueObject {
   private readonly street: string
   private readonly city: string
   private readonly country: string
   private readonly zipCode: string

   constructor(street: string, city: string, country: string, zipCode: string) {
      if (!street || !city || !country || !zipCode) {
         throw new Error("Address is invalid")
      }

      if (zipCode.match(/[^0-9]/)) {
         throw new Error("Zip code is invalid")
      }

      this.street = street
      this.city = city
      this.country = country
      this.zipCode = zipCode
   }

   compare(address: AddressValueObject) {
      return (
         this.street === address.street &&
         this.city === address.city &&
         this.country === address.country &&
         this.zipCode === address.zipCode
      )
   }

   replace(address: AddressValueObject) {
      return new AddressValueObject(address.street, address.city, address.country, address.zipCode)
   }
}
