import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
