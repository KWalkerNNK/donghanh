import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entity/entity.user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
