import { MessageDto } from "../interfaces/message.dto"
import { IMessage } from "../interfaces/message.interface"

export class MessengerMessage implements IMessage {
   constructor(private readonly messageDto: MessageDto) {}

   send() {
      console.log("Messenger message:", this.messageDto)
   }
}
