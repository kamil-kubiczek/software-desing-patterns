import { EmailMessage } from "../classes/emailMessage.class"
import { MessengerMessage } from "../classes/messengerMessage.class"
import { MessageDto } from "../interfaces/message.dto"
import { IMessage } from "../interfaces/message.interface"
import { MessageType } from "../interfaces/messageType.enum"

const messageSendStrategies = new Map<MessageType, new (messageDto: MessageDto) => IMessage>([
   [MessageType.Email, EmailMessage],
   [MessageType.Messenger, MessengerMessage]
])

export class MessageFactory {
   constructor() {}

   createFrom(dto: MessageDto) {
      return messageSendStrategies.get(dto.type)
   }
}
