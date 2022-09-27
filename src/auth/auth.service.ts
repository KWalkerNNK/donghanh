import { User } from './../database/entity/entity.user';
import { userDto } from './dto/dto.user';
import * as bcrypt from 'bcrypt';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { SECRET_ROUNDS, SECRET_KEY } from '../constant/const.secret';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwt: JwtService,
  ) {}

  async register(user: userDto) {
    try {
      //Password hash
      const password = await user.password;
      const hash = await bcrypt.hash(password, SECRET_ROUNDS);
      user.password = hash;

      //Save to database
      await this.userRepo.save(user);

      return this.signToken(user.id, user.email);
      // return `Chào mừng ${user.fullName} đã đăng kí toàn khoản thành công!`;
    } catch (err) {
      throw new HttpException(
        'Email này đã có người đăng kí sử dụng rồi! Vui lòng sử dụng Email khác!',
        401,
      );
    }
  }

  async login(user: userDto) {
    const account = await this.userRepo.findOne({
      where: { email: user.email },
    });
    if (account) {
      const isMatch = await bcrypt.compare(user.password, account.password);
      if (isMatch) {
        return this.signToken(account.id, account.email);
        // return `Hey ${account.fullName}! Bạn đã đăng nhập thành công rồi nha!`;
      }
      throw new HttpException('Sai mật khẩu rồi bạn!', 407);
    }
    throw new HttpException('Sai email rồi bạn!', 400);
  }

  //Create JWT tokens
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      id: userId,
      email,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: SECRET_KEY,
    });
    return {
      access_token: token,
    };
  }
}
