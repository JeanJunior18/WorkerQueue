import { SendMessageDto } from '@app/Common/dto/SendMessage.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AddOrganizationDto } from 'apps/ApiGateway/src/modules/whatsapp/controllers/dto/AddOorganization.dto';
import { AddOrganizationService } from 'apps/ApiGateway/src/modules/whatsapp/services/add-organization.service';
import { SendMessageService } from 'apps/ApiGateway/src/modules/whatsapp/services/send-message.service';

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
