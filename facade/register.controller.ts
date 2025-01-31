import { AccessFacade } from "./access.facade"
import { IUserDto } from "./user.dto"
import { AuthentificationService } from "./authentification.service"
import { AuthorizationService } from "./authorization.service"
import { UserRepository } from "./user.repository"

export class RegisterController {
   register(userDto: IUserDto) {
      const accessFacade = new AccessFacade(new AuthentificationService(new UserRepository()), new AuthorizationService())

      accessFacade.register(userDto)
   }
}
