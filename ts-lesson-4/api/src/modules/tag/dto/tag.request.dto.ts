import { ApiProperty } from '@nestjs/swagger';
export class TagRequestDto {
  @ApiProperty()
  name!: string;
}