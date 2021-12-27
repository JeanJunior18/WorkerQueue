import { KafkaProducerModule } from '@app/KafkaProducer';
import { Module } from '@nestjs/common';
import { SessionRepositoryProvider } from 'apps/WorkerQueue/src/adapters/session-repository.adapter';
import { WhatsappController } from 'apps/WorkerQueue/src/modules/whatsapp/controllers/rest.controller';
import { AddOrganizationService } from 'apps/WorkerQueue/src/modules/whatsapp/services/add-organization.service';
import { SendMessageService } from 'apps/WorkerQueue/src/modules/whatsapp/services/send-message.service';

@Module({
  imports: [KafkaProducerModule],
  providers: [
    SendMessageService,
    AddOrganizationService,
    SessionRepositoryProvider,
  ],
  controllers: [WhatsappController],
})
export class WhatsappModule {}
