import { Computer } from "./computer.class"
import { ComputerDecorator } from "./computer.decorator"

export class ComputerWithSsdDecorator extends ComputerDecorator {
   constructor(computer: Computer) {
      super(computer)
   }

   getName() {
      return super.getName() + " with SSD"
   }

   writeFile(data: string): void {
      console.log("Writing to SSD")
   }
}
