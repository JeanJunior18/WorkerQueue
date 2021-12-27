import { Body, Controller, Post } from '@nestjs/common';
import { SendMessageDto } from 'apps/WorkerQueue/src/modules/whatsapp/controllers/dto/SendMessage.dto';
import { SendMessageService } from 'apps/WorkerQueue/src/modules/whatsapp/services/send-message.service';

@Controller()
export class WhatsappEventsController {
  constructor(private readonly sendMessageService: SendMessageService) {}

  @Post('send')
  sendMessage(@Body() message: SendMessageDto) {
    return this.sendMessageService.execute(message);
  }
}
