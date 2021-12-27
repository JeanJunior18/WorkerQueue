import { ApiProperty } from '@nestjs/swagger';

export class AddOrganizationDto {
  @ApiProperty({ required: false })
  topic?: string;

  @ApiProperty()
  name: string;
}
