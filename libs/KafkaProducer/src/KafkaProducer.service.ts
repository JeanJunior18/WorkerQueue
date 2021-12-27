import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from 'kafkajs';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
  private readonly logger = new Logger(KafkaProducerService.name);
  private kafkaProducer: Producer;

  constructor(
    @Inject('KAFKA_SERVICE')
    private readonly clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaProducer = await this.clientKafka.connect();
  }

  async emit(topic: string, message: unknown) {
    this.logger.verbose(
      `Emit message to topic ${topic}: ${JSON.stringify(message)}`,
    );

    this.clientKafka.send(topic, message);

    return { topic, message };
  }
}
