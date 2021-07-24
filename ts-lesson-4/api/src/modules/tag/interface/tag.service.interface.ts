import { DeleteResult } from 'typeorm';
import { TagRequestDto } from '../dto/tag.request.dto';
import { TagResponseDto } from '../dto/tag.response.dto';
import { TagsResponseDto } from '../dto/tags.response.dto';

export interface ITagService {
  createTag(param: TagRequestDto): Promise<TagResponseDto>;
  
  getTags(): Promise<TagsResponseDto>;

  findTag(tagId: number): Promise<TagResponseDto>;

  updateTag(tagId: number, param: TagRequestDto): Promise<TagResponseDto>;

  deleteTag(tagId: number): Promise<DeleteResult>;
}