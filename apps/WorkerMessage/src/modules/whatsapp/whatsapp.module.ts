import { KafkaProducerModule } from '@app/KafkaProducer';
import { Module } from '@nestjs/common';
import { WhatsappEventsController } from 'apps/WorkerMessage/src/modules/whatsapp/controllers/event.controller';
import { SendMessageService } from 'apps/ApiGateway/src/modules/whatsapp/services/send-message.service';

@Module({
  imports: [KafkaProducerModule],
  providers: [SendMessageService],
  controllers: [WhatsappEventsController],
})
export class WhatsappModule {}
