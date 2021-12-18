import { KafkaProducerModule } from '@app/KafkaProducer';
import { Module } from '@nestjs/common';
import { WhatsappController } from 'apps/WorkerQueue/src/modules/whatsapp/controllers/rest.controller';
import { SendMessageService } from 'apps/WorkerQueue/src/modules/whatsapp/services/send-message.service';

@Module({
  imports: [KafkaProducerModule],
  providers: [SendMessageService],
  controllers: [WhatsappController],
})
export class WhatsappModule {}
