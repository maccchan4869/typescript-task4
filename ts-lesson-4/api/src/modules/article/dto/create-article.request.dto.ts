import { ApiProperty } from '@nestjs/swagger';
export class createArticleRequestDto {
  @ApiProperty()
  userId!: string;

  @ApiProperty()
  title!: string;

  @ApiProperty()
  content: string;
}