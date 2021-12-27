import { Injectable, Provider } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Organization } from 'apps/WorkerQueue/src/modules/whatsapp/core/organization.entity';
import { OrganizationRepositoryPort } from 'apps/WorkerQueue/src/modules/whatsapp/ports/organization-repository.port';
import { Model } from 'mongoose';

@Injectable()
export class OrganizationRepository implements OrganizationRepositoryPort {
  constructor(
    @InjectModel(Organization.name)
    private OrganizationModel: Model<Organization>,
  ) {}

  async addOrganization(organization: Organization): Promise<Organization> {
    const createdOrganization = new this.OrganizationModel(organization);
    return createdOrganization.save();
  }

  async getOrganization(id: string): Promise<Organization> {
    return this.OrganizationModel.findById({ id });
  }

  async getOrganizations(): Promise<Organization[]> {
    return this.OrganizationModel.find();
  }

  async updateOrganization(organization: Organization): Promise<Organization> {
    return this.OrganizationModel.findByIdAndUpdate(
      { id: organization.id },
      organization,
    );
  }

  async deleteOrganization(id: string): Promise<void> {
    await this.OrganizationModel.findByIdAndDelete({ id });
    return;
  }
}

export const OrganizationRepositoryProvider: Provider = {
  provide: OrganizationRepositoryPort,
  useClass: OrganizationRepository,
};
