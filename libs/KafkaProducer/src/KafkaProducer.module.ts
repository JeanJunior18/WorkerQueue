import 'dotenv/config';
import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaProducerService } from './KafkaProducer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [process.env.KAFKA_URL],
          },
        },
      },
    ]),
  ],
  providers: [
    KafkaProducerService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (client: ClientKafka) => {
        return client.connect();
      },
      inject: ['KAFKA_SERVICE'],
    },
  ],
  exports: [KafkaProducerService],
})
export class KafkaProducerModule {}
