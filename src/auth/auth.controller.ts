import { AuthDto, UserDto } from './dto/dto.index';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: UserDto) {
    return this.authService.register(user);
  }

  @Post('login')
  async login(@Body() user: AuthDto) {
    return this.authService.login(user);
  }
}
