import { MessageDto } from "../interfaces/message.dto"
import { IMessage } from "../interfaces/message.interface"

export class EmailMessage implements IMessage {
   constructor(private readonly messageDto: MessageDto) {}

   send() {
      console.log("Email message:", this.messageDto)
   }
}
