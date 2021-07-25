import { ApiProperty } from '@nestjs/swagger';
export class updateArticleRequestDto {
  @ApiProperty()
  title!: string;

  @ApiProperty()
  content: string;
}