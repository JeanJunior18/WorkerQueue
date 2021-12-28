import { Module } from '@nestjs/common';
import { WhatsappEventsController } from 'apps/WorkerMessage/src/modules/whatsapp/controllers/event.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [WhatsappEventsController],
})
export class WhatsappModule {}
