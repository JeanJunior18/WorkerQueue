import { Message } from '@app/Common/domain';
import { KafkaProducerService } from '@app/KafkaProducer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendMessageService {
  constructor(private readonly kafkaProducer: KafkaProducerService) {}

  execute(message: Message) {
    return this.kafkaProducer.emit('messages', message);
  }
}
