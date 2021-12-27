import { Injectable } from '@nestjs/common';
import { AddOrganizationDto } from 'apps/WorkerQueue/src/modules/whatsapp/controllers/dto/AddOorganization.dto';
import { Session } from 'apps/WorkerQueue/src/modules/whatsapp/core/session.entity';
import { SessionRepositoryPort } from 'apps/WorkerQueue/src/modules/whatsapp/ports/session-repository.port';

@Injectable()
export class AddOrganizationService {
  constructor(private readonly sessionRepository: SessionRepositoryPort) {
    this.execute = this.execute.bind(this);
  }

  async execute(message: AddOrganizationDto) {
    const session = new Session({
      id: '12345',
      name: message.name,
      phone: message.phone,
      topic: message.topic ?? message.phone,
    });
    console.log('Session created: ', session);
    return this.sessionRepository.addSession(session);
  }
}
