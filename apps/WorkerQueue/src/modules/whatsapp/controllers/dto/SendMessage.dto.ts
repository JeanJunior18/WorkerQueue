import { TypeMessage } from '@app/Common/domain';
import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  @ApiProperty()
  typeMessage: TypeMessage;

  @ApiProperty()
  phone: string;

  @ApiProperty({ required: false })
  text?: string;
}
