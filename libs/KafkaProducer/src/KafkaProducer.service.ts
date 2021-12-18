import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaProducerService {
  private readonly logger = new Logger(KafkaProducerService.name);

  constructor(
    @Inject('KAFKA_SERVICE')
    private readonly clientKafka: ClientKafka,
  ) {}

  async emit(topic: string, message: unknown) {
    this.logger.verbose(
      `Emit message to topic ${topic}: ${JSON.stringify(message)}`,
    );

    this.clientKafka.emit(topic, message);

    return { topic, message };
  }
}
