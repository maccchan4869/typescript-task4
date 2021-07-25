import { ApiProperty } from '@nestjs/swagger';
export class UserRequestDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  age!: string;
}