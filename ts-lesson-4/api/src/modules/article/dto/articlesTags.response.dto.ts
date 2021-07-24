import { ApiProperty } from '@nestjs/swagger';
import { ArticleTagsResponseDto } from './articleTags.response.dto';

export class ArticlesTagsResponseDto {
  @ApiProperty()
  articles: ArticleTagsResponseDto[];
}