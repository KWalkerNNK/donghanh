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

  async getCart(userId: number, dto: CartDto): Promise<{}> {
    const cart = await this.cartRepo
      .query(`select cart.id ,product.name, product.files ,product.description, product.price,
      cart.product_quantity, product.discount, user.full_name, user.address, user.phone_number, user.email
    from cart
    inner join user on cart.user_id = ${userId}
    inner join product on cart.product_id = product.id`);
    return cart;
  }

  async addOrder(userId: number, dto: CartDto): Promise<{}> {
    const orderExists = await this.cartRepo.findBy({ userId });
    if (orderExists.length != 0) {
      return await this.cartRepo.update(orderExists[0].id, dto);
    }
    return await this.cartRepo.save({ userId, ...dto });
  }

  async deleteOrder(userId: number, id: number): Promise<{}> {
    return await this.cartRepo.delete({ userId, id });
  }

  async deleteCart(userId: number): Promise<{}> {
    return await this.cartRepo.delete({ userId });
  }
}
