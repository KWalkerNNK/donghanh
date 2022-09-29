import { AuthDto, UserDto } from './dto/dto.index';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/register')
  async register(@Body() user: UserDto) {
    return this.authService.register(user);
  }

  @Post('auth/login')
  async login(@Body() user: AuthDto) {
    return this.authService.login(user);
  }
}
