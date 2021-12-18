import { TypeMessage } from '@app/Common/domain';

export class SendMessageDto {
  typeMessage: TypeMessage;
  phone: string;
  text?: string;
}
