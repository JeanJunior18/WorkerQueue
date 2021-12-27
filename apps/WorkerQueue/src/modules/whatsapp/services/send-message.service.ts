import { KafkaProducerService } from '@app/KafkaProducer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SendMessageDto } from 'apps/WorkerQueue/src/modules/whatsapp/controllers/dto/SendMessage.dto';
import { SessionRepositoryPort } from 'apps/WorkerQueue/src/modules/whatsapp/ports/session-repository.port';

@Injectable()
export class SendMessageService {
  constructor(
    private readonly kafkaProducer: KafkaProducerService,
    private readonly sessionRepository: SessionRepositoryPort,
  ) {}

  async execute(message: SendMessageDto) {
    const session = await this.sessionRepository.getSession(
      message.organizationId,
    );

    if (!session) throw new NotFoundException('Session not found');

    return this.kafkaProducer.emit(session.topic, message);
  }
}
