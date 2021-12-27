import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { AddOrganizationDto } from 'apps/ApiGateway/src/modules/whatsapp/controllers/dto/AddOorganization.dto';
import { Organization } from 'apps/ApiGateway/src/modules/whatsapp/core/organization.entity';
import { Session } from 'apps/ApiGateway/src/modules/whatsapp/core/session.entity';
import { OrganizationRepositoryPort } from 'apps/ApiGateway/src/modules/whatsapp/ports/organization-repository.port';
import { SessionRepositoryPort } from 'apps/ApiGateway/src/modules/whatsapp/ports/session-repository.port';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AddOrganizationService implements OnModuleInit {
  private logger = new Logger(AddOrganizationService.name);

  constructor(
    private readonly sessionRepository: SessionRepositoryPort,
    private readonly organizationRepository: OrganizationRepositoryPort,
  ) {}

  onModuleInit() {
    console.log('AddOrganizationService initialized');
    this.startAllOrganizations();
  }

  async execute(organization: AddOrganizationDto) {
    const newOrganization = new Organization(organization);
    newOrganization.id = newOrganization.id || uuid();

    this.startOrganization(newOrganization);

    return this.organizationRepository.addOrganization(newOrganization);
  }

  private async startOrganization(organization: Organization) {
    const session = new Session({
      id: organization.id,
      name: organization.name,
      phone: organization.phone,
      topic: organization.topic ?? organization.phone,
    });

    return this.sessionRepository.addSession(session);
  }

  private startAllOrganizations() {
    this.logger.verbose('Starting all organizations on sessions');

    this.organizationRepository.getOrganizations().then((organizations) => {
      organizations.forEach((organization) => {
        this.logger.verbose(`Add session ${organization.name}`);

        this.startOrganization(organization);
      });
    });
  }
}
