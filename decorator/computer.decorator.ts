import { Computer } from "./computer.class"

export class ComputerDecorator extends Computer {
   constructor(public computer: Computer) {
      super(computer.name, computer.os)
   }

   getName() {
      return this.computer.getName()
   }

   getOS() {
      return this.computer.getOS()
   }

   renderVideo() {
      return this.computer.renderVideo()
   }

   writeFile(data: string) {
      return this.computer.writeFile(data)
   }
}
