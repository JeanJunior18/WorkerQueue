import { KafkaProducerService } from '@app/KafkaProducer';
import { Injectable } from '@nestjs/common';
import { SendMessageDto } from 'apps/WorkerQueue/src/modules/whatsapp/controllers/dto/SendMessage.dto';

@Injectable()
export class SendMessageService {
  constructor(private readonly kafkaProducer: KafkaProducerService) {}

  execute(message: SendMessageDto) {
    return this.kafkaProducer.emit('messages', message);
  }
}
