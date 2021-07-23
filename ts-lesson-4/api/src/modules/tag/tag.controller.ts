import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiExtraModels, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ApiErrorResponse, ApiSuccessResponse } from 'src/common/decoraters';
import { CommonResponse, CreatedResponse, NotFoundResponse, OkResponse, UnAuthorizedResponse } from 'src/common/types/response';
import { DeleteResult } from 'typeorm';
import { createTagRequestDto } from './dto/create-tag.request.dto';
import { TagResponseDto } from './dto/tag.response.dto';
import { TagsResponseDto } from './dto/tags.response.dto';
import { updateTagRequestDto } from './dto/update-tag.request.dto';
import { TagService } from './tag.service';

@ApiTags('tags')
@Controller('tags')
@ApiExtraModels(ApiUnauthorizedResponse, NotFoundException)
@ApiErrorResponse(UnAuthorizedResponse)
@ApiErrorResponse(NotFoundResponse)  
export class TagController {
  constructor(private readonly _tagService: TagService) {}
  
  @Post()
  @ApiExtraModels(CreatedResponse, TagResponseDto)
  @ApiSuccessResponse(CreatedResponse, TagResponseDto)
  async createTag(@Body() param: createTagRequestDto): Promise<CommonResponse> {
    let responseData: TagResponseDto;

    responseData = await this._tagService.createTag(param);

    return new CreatedResponse(responseData);
  }

  @Get()
  @ApiExtraModels(OkResponse, TagsResponseDto)
  @ApiSuccessResponse(OkResponse, TagsResponseDto)
  async getTags(): Promise<CommonResponse> {
    let responseData: TagsResponseDto;

    responseData = await this._tagService.getTags();

    return new OkResponse(responseData);
  }

  @Get(':tagId')
  @ApiExtraModels(OkResponse, TagResponseDto)
  @ApiSuccessResponse(OkResponse, TagResponseDto)
  async getTag(@Param('tagId') tagId: number): Promise<CommonResponse> {
    let responseData: TagResponseDto;

    responseData = await this._tagService.findTag(tagId);

    return new OkResponse(responseData);
  }

  @Put(':tagId')
  @ApiExtraModels(OkResponse, TagResponseDto)
  @ApiSuccessResponse(OkResponse, TagResponseDto)
  async updateTag(
    @Param('tagId') tagId: number,
    @Body() param: updateTagRequestDto
  ): Promise<CommonResponse> {
    let responseData: TagResponseDto;

    responseData = await this._tagService.updateTag(tagId, param);

    return new OkResponse(responseData);
  }

  @Delete(':tagId')
  @ApiExtraModels(OkResponse, DeleteResult)
  @ApiSuccessResponse(OkResponse, DeleteResult)
  async deleteTag(@Param('tagId') tagId: number): Promise<CommonResponse> {
    let responseData: DeleteResult;

    responseData = await this._tagService.deleteTag(tagId);

    return new OkResponse(responseData);
  }
}
