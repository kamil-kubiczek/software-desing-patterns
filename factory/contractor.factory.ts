import { Company } from "./company.entity"
import { ContractorDto } from "./contractor.dto"
import { Contractor } from "./contractor.interface"
import { Person } from "./person.entity"

export class ContractorFactory {
   constructor() {}

   createFrom(contractor: ContractorDto): Contractor {
      if (contractor.vatId && contractor.firstName && contractor.lastName && contractor.uniqueId) {
         return new Person(contractor.firstName, contractor.lastName, contractor.uniqueId)
      }

      if (contractor.vatId && contractor.companyName) {
         return new Company(contractor.companyName, contractor.vatId)
      }

      throw new Error("Cannot match contractor dto to class")
   }
}
