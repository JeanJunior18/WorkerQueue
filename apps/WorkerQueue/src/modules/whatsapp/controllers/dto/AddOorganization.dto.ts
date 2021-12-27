import { ApiProperty } from '@nestjs/swagger';

export class AddOrganizationDto {
  @ApiProperty()
  phone: string;

  @ApiProperty({ required: false })
  topic?: string;

  @ApiProperty()
  name: string;
}
