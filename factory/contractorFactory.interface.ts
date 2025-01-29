import { ContractorDto } from "./contractor.dto"
import { Contractor } from "./contractor.interface"

export interface ContractorFactoryInterface {
   createFrom(dto: ContractorDto): Contractor
}
