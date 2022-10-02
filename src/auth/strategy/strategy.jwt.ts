import { User } from './../../database/entity/entity.user';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SECRET_KEY } from '../../constant/const.secret';
import { Repository } from 'typeorm';

Injectable();
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {
    super({
      //Trích xuất từ Tiêu đề xác thực dưới dạng mã thông báo Bearer!
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEY,
    });
  }

  //Dùng để hiển thị thông tin tài khoản hiện tại
  async validate(payload: { id: number; email: string; role?: string }) {
    const account = await this.userRepo.findOne({
      where: { email: payload.email },
    });
    delete account.password && delete account.isRole;
    return account;
  }
}
