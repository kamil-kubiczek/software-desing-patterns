export class Computer {
   constructor(public name: string, public os: string) {}

   getName() {
      return this.name
   }

   renderVideo() {
      console.log("Cannot render video without GPU")
   }

   getOS() {
      return this.os
   }

   writeFile(data: string) {
      console.log("Cannot write file without SSD/HDD")
   }
}
