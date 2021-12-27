import { KafkaProducerModule } from '@app/KafkaProducer';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationRepositoryProvider } from 'apps/ApiGateway/src/adapters/organization.repository.adapter';
import { SessionRepositoryProvider } from 'apps/ApiGateway/src/adapters/session-repository.adapter';
import { WhatsappController } from 'apps/ApiGateway/src/modules/whatsapp/controllers/rest.controller';
import {
  Organization,
  OrganizationSchema,
} from 'apps/ApiGateway/src/modules/whatsapp/core/organization.entity';
import { AddOrganizationService } from 'apps/ApiGateway/src/modules/whatsapp/services/add-organization.service';
import { SendMessageService } from 'apps/ApiGateway/src/modules/whatsapp/services/send-message.service';

@Module({
  imports: [
    KafkaProducerModule,
    MongooseModule.forFeature([
      {
        name: Organization.name,
        schema: OrganizationSchema,
      },
    ]),
  ],
  providers: [
    SendMessageService,
    AddOrganizationService,
    SessionRepositoryProvider,
    OrganizationRepositoryProvider,
  ],
  controllers: [WhatsappController],
})
export class WhatsappModule {}
