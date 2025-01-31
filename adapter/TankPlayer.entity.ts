import { IPlayer } from "./player.interface"

export class TankPlayer implements IPlayer {
   shoot(): void {
      console.log("Tank player shoots")
   }
   move(): void {
      console.log("Tank player moves")
   }
}
