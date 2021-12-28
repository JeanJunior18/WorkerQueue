import 'dotenv/config';
import { KafkaEvent, SendMessageDto } from '@app/Common/dto';
import { Body, Controller, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class WhatsappEventsController {
  private readonly logger = new Logger(WhatsappEventsController.name);
  private readonly topic = process.env.WORKER_MESSAGE_TOPIC;

  constructor() {
    if (!this.topic) throw new Error('Topic not defined');
    this.logger.log(`Topic: ${this.topic}`);
  }

  @EventPattern(process.env.WORKER_MESSAGE_TOPIC)
  sendMessage(@Body() event: KafkaEvent<SendMessageDto>) {
    this.logger.log(`Event received: ${JSON.stringify(event.value)}`);
  }
}
