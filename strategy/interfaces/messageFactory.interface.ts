import { MessageDto } from "./message.dto"
import { IMessage } from "./message.interface"

export interface IMessageFactory {
   createFrom(dto: MessageDto): IMessage
}
