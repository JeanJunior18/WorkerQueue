import { Organization } from 'apps/ApiGateway/src/modules/whatsapp/core/organization.entity';

export class OrganizationRepositoryPort {
  addOrganization: (organization: Organization) => Promise<Organization>;
  getOrganization: (phone: string) => Promise<Organization>;
  getOrganizations: () => Promise<Organization[]>;
  updateOrganization: (organization: Organization) => Promise<Organization>;
  deleteOrganization: (phone: string) => Promise<void>;
}
