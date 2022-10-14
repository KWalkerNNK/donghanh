import { MESSAGE } from './../utils/util.message';
import { AuthDto, UserDto } from './dto/dto.index';
import { User } from './../database/entity/entity.user';
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

  async register(user: UserDto) {
    try {
      //Password hash
      const password = await user.password;
      const hash = await bcrypt.hash(password, SECRET_ROUNDS);
      user.password = hash;

      //Save to database
      await this.userRepo.save(user);

      return this.signToken(user.id, user.email, user.isRole);
    } catch (err) {
      throw new HttpException(MESSAGE.SIGNUP_FAILED, 401);
    }
  }

  async login(user: AuthDto) {
    const account = await this.userRepo.findOne({
      where: { email: user.email },
    });
    if (account) {
      const isMatch = await bcrypt.compare(user.password, account.password);
      if (isMatch) {
        return this.signToken(account.id, account.email, account.isRole);
      }
      throw new HttpException(MESSAGE.WRONG_PASSWORD, 407);
    }
    throw new HttpException(MESSAGE.WRONG_EMAIL, 400);
  }

  //Create JWT tokens
  async signToken(
    userId: number,
    email: string,
    role?: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      id: userId,
      email,
      role,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '14d',
      secret: SECRET_KEY,
    });
    return {
      access_token: token,
    };
  }
}
