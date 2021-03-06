import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiExtraModels, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ApiErrorResponse, ApiSuccessResponse } from 'src/common/decoraters';
import { CommonResponse, CreatedResponse, NotFoundResponse, OkResponse, UnAuthorizedResponse } from 'src/common/types/response';
import { ArticleTag } from 'src/database/entities/article-tag.entity';
import { DeleteResult } from 'typeorm';
import { ArticleService } from './article.service';
import { createArticleTagRequestDto } from './dto/create-articleTag.request.dto';
import { ArticleResponseDto } from './dto/article.response.dto';
import { ArticlesTagsResponseDto } from './dto/articlesTags.response.dto';
import { ArticleTagResponseDto } from './dto/articleTag.response';
import { ArticleTagsResponseDto } from './dto/articleTags.response.dto';
import { createArticleRequestDto } from './dto/create-article.request.dto';
import { updateArticleRequestDto } from './dto/update-article.request.dto';

@ApiTags('articles')
@Controller('articles')
@ApiExtraModels(ApiUnauthorizedResponse, NotFoundException)
@ApiErrorResponse(UnAuthorizedResponse)
@ApiErrorResponse(NotFoundResponse) 
export class ArticleController {
  constructor(private readonly _articleService: ArticleService) {}
  
  @Post()
  @ApiExtraModels(CreatedResponse, ArticleResponseDto)
  @ApiSuccessResponse(CreatedResponse, ArticleResponseDto)
  async createArticle(@Body() param: createArticleRequestDto): Promise<CommonResponse> {
    let responseData: ArticleResponseDto;

    responseData = await this._articleService.createArticle(param);

    return new CreatedResponse(responseData);
  }

  @Get()
  @ApiExtraModels(OkResponse, ArticlesTagsResponseDto)
  @ApiSuccessResponse(OkResponse, ArticlesTagsResponseDto)
  async getArticles(): Promise<CommonResponse> {
    let responseData: ArticlesTagsResponseDto;

    responseData = await this._articleService.getArticles();

    return new OkResponse(responseData);
  }

  @Get(':articleId')
  @ApiExtraModels(OkResponse, ArticleTagsResponseDto)
  @ApiSuccessResponse(OkResponse, ArticleTagsResponseDto)
  async findArticle(@Param('articleId') articleId: number): Promise<CommonResponse> {
    let responseData: ArticleTagsResponseDto;
    
    responseData = await this._articleService.findArticle(articleId);

    return new OkResponse(responseData);
  }

  @Put(':articleId')
  @ApiExtraModels(OkResponse, ArticleResponseDto)
  @ApiSuccessResponse(OkResponse, ArticleResponseDto)
  async updateArticle(
    @Param('articleId') articleId: number,
    @Body() param: updateArticleRequestDto
  ): Promise<CommonResponse> {
    let responseData: ArticleResponseDto;

    responseData = await this._articleService.updateArticle(articleId, param);

    return new OkResponse(responseData);
  }

  @Delete(':articleId')
  @ApiExtraModels(OkResponse, DeleteResult)
  @ApiSuccessResponse(OkResponse, DeleteResult)
  async deleteArticle(@Param('articleId') articleId: number): Promise<CommonResponse> {
    let responseData: DeleteResult;
    
    responseData = await this._articleService.deleteArticle(articleId);

    return new OkResponse(responseData);
  }

  @Post('tags')
  @ApiExtraModels(OkResponse, ArticleTagResponseDto)
  @ApiSuccessResponse(OkResponse, ArticleTagResponseDto)
  async joinTag(@Body() param: createArticleTagRequestDto): Promise<CommonResponse> {
    let responseData: ArticleTagResponseDto;

    responseData = await this._articleService.joinTag(param);

    return new OkResponse(responseData);
  }

  @Delete(':articleId/tags/:tagId')
  @ApiExtraModels(OkResponse, DeleteResult)
  @ApiSuccessResponse(OkResponse, DeleteResult)
  async releaseTag(
    @Param('articleId') articleId: number,
    @Param('tagId') tagId: number
  ): Promise<CommonResponse> {
    let responseData: DeleteResult;

    responseData = await this._articleService.releaseTag(articleId, tagId);

    return new OkResponse(responseData);
  }
}
