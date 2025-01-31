export class AddressValueObject {
   constructor(public street: string, public city: string, public country: string, public zipCode: string) {
      if (!street || !city || !country || !zipCode) {
         throw new Error("Address is invalid")
      }

      if (zipCode.match(/[^0-9]/)) {
         throw new Error("Zip code is invalid")
      }
   }
}
