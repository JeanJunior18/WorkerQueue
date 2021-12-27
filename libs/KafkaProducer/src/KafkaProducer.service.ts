import { Event } from '@app/Common/domain';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from 'kafkajs';
import { v4 as uuid } from 'uuid';

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

  async emit(topic: string, message: Event<unknown>) {
    this.logger.verbose(
      `Emit message to topic ${topic}: ${JSON.stringify(message)}`,
    );

    this.kafkaProducer.send({
      topic,
      messages: [
        {
          key: uuid(),
          value: JSON.stringify(message),
        },
      ],
    });

    return { topic, message };
  }
}
