import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Organization {
  @Prop()
  id: string;

  @Prop()
  topic: string;

  @Prop()
  phone: string;

  @Prop()
  name: string;

  constructor(data: Partial<Organization>) {
    Object.assign(this, data);
  }
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
