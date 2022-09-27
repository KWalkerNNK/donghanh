import { userDto } from './dto/dto.user';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/register')
  async register(@Body() user: userDto) {
    return this.authService.register(user);
  }

  @Post('auth/login')
  async login(@Body() user: userDto) {
    return this.authService.login(user);
  }
}
