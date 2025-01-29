import { MessageDto } from "../interfaces/message.dto"
import { IMessageFactory } from "../interfaces/messageFactory.interface"
import { IMessageSenderService } from "../interfaces/messageSender.interface"

class MessageSenderService implements IMessageSenderService {
   constructor(private readonly messageFactory: IMessageFactory) {}

   trigger(dto: MessageDto): void {
      const messageVariant = this.messageFactory.createFrom(dto)

      messageVariant.send()
   }
}
