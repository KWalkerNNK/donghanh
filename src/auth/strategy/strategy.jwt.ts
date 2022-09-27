import { Injectable, Next, Res } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SECRET_KEY } from 'src/constant/const.secret';

Injectable();
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      //Trích xuất từ Tiêu đề xác thực dưới dạng mã thông báo Bearer!
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEY,
    });
  }

  async validate(payload: { id: number; email: string }) {
    return payload;
  }
}
