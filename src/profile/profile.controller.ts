import { User } from './../database/entity/entity.user';
import { JwtGuard } from './../auth/guard/guard.jwt';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorators/decorator.index';

@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
  @Get('/')
  getMe(@GetUser() user: User) {
    return user;
  }
}
