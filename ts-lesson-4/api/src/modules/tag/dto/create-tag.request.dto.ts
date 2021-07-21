import { ApiProperty } from '@nestjs/swagger';
export class createTagRequestDto {
  @ApiProperty()
  name!: string;
}