import { User } from '../database/entity/entity.user';
import { JwtGuard } from '../auth/guard/guard.jwt';
import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorators/decorator.index';
import { UserService } from './user.service';
import { EditUserDto } from './dto/dto.edit-user';

@UseGuards(JwtGuard)
@Controller('profile')
export class UserController {
  constructor(private readonly profileService: UserService) {}

  @Get('/')
  getProfile(@GetUser() user: User) {
    return user;
  }

  @Patch('edit')
  async editUser(
    @GetUser('id') userId: number,
    @Body() editUserDto: EditUserDto,
  ) {
    return await this.profileService.editUser(userId, editUserDto);
  }
}
