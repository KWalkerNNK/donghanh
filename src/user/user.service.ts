import { MESSAGE } from '../utils/util.message';
import { User } from '../database/entity/entity.user';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { EditUserDto } from './dto/dto.edit-user';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async editUser(userId: number, editUserDto: EditUserDto): Promise<{}> {
    await this.userRepo.update(userId, editUserDto);
    return { message: MESSAGE.EDIT_PROFILE, ...editUserDto };
  }
}
