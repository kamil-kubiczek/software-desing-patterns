import { AddressValueObject } from "./address.vo"

export class Building {
   id: string
   name: string
   address: AddressValueObject

   getAddress() {
      return this.address
   }

   getName() {
      return this.name
   }

   getId() {
      return this.id
   }

   compare(building: Building) {
      return this.id === building.id
   }
}
