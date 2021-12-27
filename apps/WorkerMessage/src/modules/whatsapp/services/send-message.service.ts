import { SendMessageDto } from '@app/Common/dto/SendMessage.dto';
import { KafkaProducerService } from '@app/KafkaProducer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendMessageService {
  constructor(private readonly kafkaProducer: KafkaProducerService) {}

  execute(message: SendMessageDto) {
    return this.kafkaProducer.emit('messages', message);
  }
}
