import { Test, TestingModule } from '@nestjs/testing';
import { KafkaProducerService } from './KafkaProducer.service';

describe('KafkaProducerService', () => {
  let service: KafkaProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaProducerService],
    }).compile();

    service = module.get<KafkaProducerService>(KafkaProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
