import { AuthService } from '../auth/auth.service';
import { RecoverController } from './recover.controller';
import { CacheModule, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import {
  SECRET_HOST,
  SECRET_PASS,
  SECRET_USER_KEY,
} from '../constant/const.secret';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entity/entity.user';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: SECRET_HOST,
        port: 465,
        secure: true,
        auth: {
          user: SECRET_USER_KEY,
          pass: SECRET_PASS,
        },
      },
    }),
    CacheModule.register(),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({}),
  ],
  controllers: [RecoverController],
  providers: [AuthService],
})
export class RecoverModule {}
