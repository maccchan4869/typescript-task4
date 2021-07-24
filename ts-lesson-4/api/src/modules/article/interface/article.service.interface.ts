import { DeleteResult } from 'typeorm';
import { ArticleResponseDto } from '../dto/article.response.dto';
import { ArticlesTagsResponseDto } from '../dto/articlesTags.response.dto';
import { ArticleTagResponseDto } from '../dto/articleTag.response';
import { ArticleTagsResponseDto } from '../dto/articleTags.response.dto';
import { createArticleRequestDto } from '../dto/create-article.request.dto';
import { createArticleTagRequestDto } from '../dto/create-articleTag.request.dto';
import { updateArticleRequestDto } from '../dto/update-article.request.dto';

export interface IArticleService {
  createArticle(param: createArticleRequestDto): Promise<ArticleResponseDto>;

  joinTag(param: createArticleTagRequestDto): Promise<ArticleTagResponseDto>;

  getArticles(): Promise<ArticlesTagsResponseDto>;

  findArticle(articleId: number): Promise<ArticleTagsResponseDto>;

  updateArticle(articleId: number, param: updateArticleRequestDto): Promise<ArticleResponseDto>;

  releaseTag(articleId: number, tagId: number): Promise<DeleteResult>;

  deleteArticle(articleId: number): Promise<DeleteResult>;
}