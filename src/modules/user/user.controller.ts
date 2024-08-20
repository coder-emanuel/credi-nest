import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<IUser> {
    return this.userService.findById(id);
  }
}
