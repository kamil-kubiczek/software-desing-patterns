import { HumanPlayer } from "./HumanPlayer.entity"
import { IPlayer } from "./player.interface"

export class HumanToPlayerAdapter implements IPlayer {
   constructor(private readonly human: HumanPlayer) {}

   shoot(): void {
      this.human.shoot()
   }

   move(): void {
      this.human.walk()
   }
}
