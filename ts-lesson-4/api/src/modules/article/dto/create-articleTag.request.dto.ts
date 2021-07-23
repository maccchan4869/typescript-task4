import { ApiProperty } from '@nestjs/swagger';
export class createArticleTagRequestDto {
  @ApiProperty()
  articleId: number;

  @ApiProperty()
  tagId: number;
}