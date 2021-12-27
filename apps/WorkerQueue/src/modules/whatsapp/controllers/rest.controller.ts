import { Body, Controller, Post } from '@nestjs/common';
import { AddOrganizationDto } from 'apps/WorkerQueue/src/modules/whatsapp/controllers/dto/AddOorganization.dto';
import { SendMessageDto } from 'apps/WorkerQueue/src/modules/whatsapp/controllers/dto/SendMessage.dto';
import { AddOrganizationService } from 'apps/WorkerQueue/src/modules/whatsapp/services/add-organization.service';
import { SendMessageService } from 'apps/WorkerQueue/src/modules/whatsapp/services/send-message.service';

@Controller()
export class WhatsappController {
  constructor(
    private readonly sendMessageService: SendMessageService,
    private readonly addOrganizationService: AddOrganizationService,
  ) {}

  @Post('send')
  sendMessage(@Body() message: SendMessageDto) {
    return this.sendMessageService.execute(message);
  }

  @Post('add-organization')
  addOrganization(@Body() organization: AddOrganizationDto) {
    return this.addOrganizationService.execute(organization);
  }
}
