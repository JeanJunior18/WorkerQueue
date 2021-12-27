import { SendMessageDto } from '@app/Common/dto/SendMessage.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { SendMessageService } from 'apps/ApiGateway/src/modules/whatsapp/services/send-message.service';

@Controller()
export class WhatsappEventsController {
  constructor(private readonly sendMessageService: SendMessageService) {}

  @Post('send')
  sendMessage(@Body() message: SendMessageDto) {
    return this.sendMessageService.execute(message);
  }
}
