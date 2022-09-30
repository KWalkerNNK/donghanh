import { User } from './../database/entity/entity.user';
import { JwtGuard } from './../auth/guard/guard.jwt';
import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorators/decorator.index';
import { ProfileService } from './profile.service';
import { EditUserDto } from './dto/dto.edit-user';

@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('/')
  getProfile(@GetUser() user: User) {
    return user;
  }

  @Patch('edit')
  async editProfile(
    @GetUser('id') userId: number,
    @Body() editUserDto: EditUserDto,
  ) {
    return await this.profileService.editProfile(userId, editUserDto);
  }
}
