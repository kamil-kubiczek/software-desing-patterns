import { IUserDto } from "./user.dto"
import { UserRepository } from "./user.repository"

export class AuthentificationService {
   constructor(private readonly userRepository: UserRepository) {}

   register(userDto: IUserDto) {
      const user = this.userRepository.initializeInSystem(userDto)

      return user
   }
}
