import { Event, TypeEvent } from '@app/Common/domain';
import { SendMessageDto } from '@app/Common/dto';
import { KafkaProducerService } from '@app/KafkaProducer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SessionRepositoryPort } from 'apps/ApiGateway/src/modules/whatsapp/ports/session-repository.port';

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

    return this.kafkaProducer.emit(
      session.topic,
      new Event(TypeEvent.SEND_MESSAGE, message),
    );
  }
}
