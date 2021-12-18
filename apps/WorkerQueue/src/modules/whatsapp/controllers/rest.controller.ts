import { Message } from '@app/Common/domain';
import { Body, Controller, Post } from '@nestjs/common';
import { SendMessageService } from 'apps/WorkerQueue/src/modules/whatsapp/services/send-message.service';

@Controller()
export class WhatsappController {
  constructor(private readonly sendMessageService: SendMessageService) {}

  @Post('send')
  sendMessage(@Body() message: Message) {
    return this.sendMessageService.execute(message);
  }
}
