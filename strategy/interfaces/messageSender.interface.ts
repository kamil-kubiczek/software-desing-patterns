import { MessageDto } from "./message.dto"

export interface IMessageSenderService {
   trigger(dto: MessageDto): void
}
