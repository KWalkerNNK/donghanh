import { MESSAGE } from '../utils/util.message';
import { User } from '../database/entity/entity.user';
import { Repository } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { EditUserDto } from './dto/dto.edit-user';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async editUser(userId: number, editUserDto: EditUserDto): Promise<{}> {
    try {
      await this.userRepo.update(userId, editUserDto);
      return { message: MESSAGE.EDIT_PROFILE, ...editUserDto };
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new HttpException(MESSAGE.EDITING_ERROR, 500);
      }
    }
  }
}
