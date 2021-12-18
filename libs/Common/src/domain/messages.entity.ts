export enum TypeMessage {
  Text = 'TextMessage',
  Audio = 'AudioMessage',
  Image = 'ImageMessage',
  Document = 'DocumentMessage',
}

export class Message {
  typeMessage: TypeMessage;
  isFromMe: boolean;
  name: string;
  phone: string;
  text?: string;
  mimeType?: string;
  url?: string;
}
