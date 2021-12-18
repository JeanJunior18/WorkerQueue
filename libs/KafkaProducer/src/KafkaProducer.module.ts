import { Module } from '@nestjs/common';
import { KafkaProducerService } from './KafkaProducer.service';

@Module({
  providers: [KafkaProducerService],
  exports: [KafkaProducerService],
})
export class KafkaProducerModule {}
