import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiExtraModels, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ApiErrorResponse, ApiSuccessResponse } from 'src/common/decoraters';
import { CommonResponse, CreatedResponse, NotFoundResponse, OkResponse, UnAuthorizedResponse } from 'src/common/types/response';
import { createUserRequestDto } from './dto/create-user.request.dto';
import { updateUserRequestDto } from './dto/update-user.request.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { UsersResponseDto } from './dto/users.response.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
@ApiExtraModels(ApiUnauthorizedResponse, NotFoundException)
@ApiErrorResponse(UnAuthorizedResponse)
@ApiErrorResponse(NotFoundResponse)  
export class UserController {
  constructor(private readonly _userService: UserService) {}
  
  @Post()
  @ApiExtraModels(CreatedResponse, UserResponseDto)
  @ApiSuccessResponse(CreatedResponse, UserResponseDto)
  async createUser(@Body() param: createUserRequestDto): Promise<CommonResponse> {
    let responseData: UserResponseDto;

    responseData = await this._userService.createUser(param);

    return new CreatedResponse(responseData);
  }

  @Get()
  @ApiExtraModels(OkResponse, UsersResponseDto)
  @ApiSuccessResponse(OkResponse, UsersResponseDto)
  async getUsers(): Promise<CommonResponse> {
    let responseData: UsersResponseDto;

    responseData = await this._userService.getUsers();

    return new OkResponse(responseData);
  }

  @Get(':userId')
  @ApiExtraModels(OkResponse, UserResponseDto)
  @ApiSuccessResponse(OkResponse, UserResponseDto)
  async getUser(@Param('userId') userId: string): Promise<CommonResponse> {
    let responseData: UserResponseDto;

    responseData = await this._userService.findUser(userId);

    return new OkResponse(responseData);
  }

  @Put(':userId')
  @ApiExtraModels(OkResponse, UserResponseDto)
  @ApiSuccessResponse(OkResponse, UserResponseDto)
  async updateUser(
    @Param('userId') userId: string,
    @Body() param: updateUserRequestDto
  ): Promise<CommonResponse> {
    let responseData: UserResponseDto;

    responseData = await this._userService.updateUser(userId, param);

    return new OkResponse(responseData);
  }
}
