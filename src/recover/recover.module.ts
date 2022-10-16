import { RecoverController } from './recover.controller';
import { CacheModule, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import {
  SECRET_HOST,
  SECRET_PASS,
  SECRET_USER_KEY,
} from 'src/constant/const.secret';

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
  ],
  controllers: [RecoverController],
  providers: [],
})
export class RecoverModule {}
