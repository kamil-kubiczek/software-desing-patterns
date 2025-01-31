import { Computer } from "./computer.class"
import { ComputerDecorator } from "./computer.decorator"

export class ComputerWithGpuDecorator extends ComputerDecorator {
   constructor(computer: Computer) {
      super(computer)
   }

   getName() {
      return super.getName() + " with Nvidia GPU"
   }

   renderVideo() {
      console.log("Rendering video with GPU")
   }
}
