import { CartDto } from './dto/dto.cart';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../database/entity/entity.cart';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
  ) {}

  async getCart(userId: number): Promise<{}> {
    return await this.cartRepo.findBy({ userId });
  }

  async addOrder(userId: number, dto: CartDto): Promise<{}> {
    return await this.cartRepo.save({ userId, ...dto });
  }
}
