import { UserRequestDto } from '../dto/user.request.dto';
import { UserResponseDto } from '../dto/user.response.dto';
import { UsersResponseDto } from '../dto/users.response.dto';

export interface IUserService {
  createUser(param: UserRequestDto): Promise<UserResponseDto>;

  getUsers(): Promise<UsersResponseDto>;

  findUser(userId: string): Promise<UserResponseDto>;

  updateUser(userId: string, param: UserRequestDto): Promise<UserResponseDto>;
}