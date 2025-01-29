import { ContractorDto } from "./contractor.dto"
import { ContractorFactoryInterface } from "./contractorFactory.interface"

export class DocumentsService {
   constructor(private readonly contractorFactory: ContractorFactoryInterface) {}

   createDocumentForSuppliedContractor(contractorDto: ContractorDto) {
      const contractor = this.contractorFactory.createFrom(contractorDto)

      console.log("Object created using factory")
   }
}
