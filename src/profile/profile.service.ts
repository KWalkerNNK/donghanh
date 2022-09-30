import { User } from './../database/entity/entity.user';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { EditUserDto } from './dto/dto.edit-user';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async editProfile(userId: number, editUserDto: EditUserDto) {
    await this.userRepo.update(userId, editUserDto);
    return { message: 'Update data success !', ...editUserDto };
  }
}
