import { HumanPlayer } from "./HumanPlayer.entity"
import { HumanToPlayerAdapter } from "./HumanToPlayer.adapter"
import { TankPlayer } from "./TankPlayer.entity"

const humanPlayer = new HumanPlayer()

const tankPlayer = new TankPlayer()

const humanToPlayerAdapter = new HumanToPlayerAdapter(humanPlayer)

humanToPlayerAdapter.shoot()
humanToPlayerAdapter.move()

tankPlayer.shoot()
tankPlayer.move()
