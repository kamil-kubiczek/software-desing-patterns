import { MessageType } from "./messageType.enum"

export interface MessageDto {
   id: string
   content?: string
   title?: string
   type: MessageType
}
