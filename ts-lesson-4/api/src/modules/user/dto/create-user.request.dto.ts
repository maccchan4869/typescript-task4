import { ApiProperty } from '@nestjs/swagger';
export class createUserRequestDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  age!: string;
}