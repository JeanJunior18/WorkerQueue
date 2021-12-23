import { ClientKafka } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { KafkaProducerService } from './KafkaProducer.service';

describe('KafkaProducerService', () => {
  let service: KafkaProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KafkaProducerService,
        {
          provide: 'KAFKA_SERVICE',
          useClass: ClientKafka,
        },
      ],
    }).compile();

    service = module.get<KafkaProducerService>(KafkaProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should emit message to topic', async () => {
    const topic = 'test';
    const message = {
      id: '123',
      name: 'test',
    };

    const result = await service.emit(topic, message);

    expect(result).toEqual({ topic, message });
  });
});
