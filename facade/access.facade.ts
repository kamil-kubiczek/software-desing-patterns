import { AuthentificationService } from "./authentification.service"
import { AuthorizationService } from "./authorization.service"
import { IUserDto } from "./user.dto"

export class AccessFacade {
   constructor(
      private readonly authService: AuthentificationService,
      private readonly authorizationService: AuthorizationService
   ) {}

   register(userDto: IUserDto) {
      // complex operations
      const hasPermission = this.authorizationService.hasPermissionToRegister(userDto)

      if (hasPermission) return this.authService.register(userDto)
   }
}
