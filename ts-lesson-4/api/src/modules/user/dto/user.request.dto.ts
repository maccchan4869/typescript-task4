import { ApiProperty } from '@nestjs/swagger';
export class userRequestDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  age!: string;
}