import { ApiProperty } from '@nestjs/swagger';
export class updateArticleTagRequestDto {
  @ApiProperty()
  tagId: number;
}