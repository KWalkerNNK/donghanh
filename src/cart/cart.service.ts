import { Statistic } from '../database/entity/entity.statistic';
import { UpdateOrderDto } from './dto/dto.update-order';
import { CartDto } from './dto/dto.cart';
import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../database/entity/entity.cart';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
    @InjectRepository(Statistic)
    private readonly statisticRepo: Repository<Statistic>,
  ) {}

  async getCart(userId: number): Promise<{}> {
    const cart = await this.cartRepo
      .query(`select cart.id, product.name, product.files, product.description, product.price,
      cart.product_quantity, product.discount, user.full_name, user.address, user.phone_number, user.email
    from cart
    inner join user on cart.user_id = user.id
    inner join product on cart.product_id = product.id
    where cart.user_id = ${userId} & (cart.deleted_at is null)`);
    return cart;
  }

  async addOrder(userId: number, dto: CartDto): Promise<{}> {
    const orderExists = await this.cartRepo.findOne({
      where: { userId: userId, productId: dto.productId },
    });
    if (orderExists) {
      return await this.cartRepo.update(orderExists.id, dto);
    }
    return await this.cartRepo.save({ userId, ...dto });
  }

  async updateOrder(
    @Param(':id', ParseIntPipe) productId: number,
    dto: UpdateOrderDto,
  ): Promise<{}> {
    return await this.cartRepo.update(productId, dto);
  }

  async deleteOrder(userId: number, id: number): Promise<{}> {
    return await this.cartRepo.delete({ userId, id });
  }

  async deleteCart(userId: number): Promise<{}> {
    return await this.cartRepo.delete({ userId });
  }

  async purchase(userId: number, cartId: number): Promise<{}> {
    const orderExists = await this.cartRepo.find({
      where: { userId: userId, id: cartId },
      withDeleted: false,
    });
    if (orderExists.length > 0) {
      await this.statisticRepo.save({ cartId });
      return await this.cartRepo.softDelete({ userId: userId, id: cartId });
    } else {
      return 'Không được spam!';
    }
  }
}
