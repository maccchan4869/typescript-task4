import { ApiProperty } from '@nestjs/swagger';
import { Article } from 'src/database/entities/article.entity';
import { Tag } from 'src/database/entities/tag.entity';

export class ArticleTagsResponseDto {
  @ApiProperty()
  article: Article;

  @ApiProperty()
  tags: Tag[];
}