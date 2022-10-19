import { ConfirmedDto } from './dto/dto.confirmed';
import { Statistic } from './../database/entity/entity.statistic';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatisticService {
  constructor(
    @InjectRepository(Statistic)
    private readonly statisticRepo: Repository<Statistic>,
  ) {}

  async getStatistic(): Promise<{}> {
    return await this.statisticRepo.query(`
        select statistic.id, product.name, product.files, product.description, product.price,
        cart.product_quantity, product.discount, user.full_name, user.address, user.phone_number, user.email, statistic.status
        from cart
        inner join user on cart.user_id = user.id
        inner join product on cart.product_id = product.id
        inner join statistic on statistic.cart_id = cart.id`);
  }

  async cartConfirmation(id: number, dto: ConfirmedDto): Promise<{}> {
    return await this.statisticRepo.update(id, dto);
  }

  async cartSearch(id: number): Promise<{}> {
    return await this.statisticRepo.query(`
        select statistic.id, product.name, product.files, product.description, product.price,
        cart.product_quantity, product.discount, user.full_name, user.address, user.phone_number, user.email, statistic.status
        from cart
        inner join user on cart.user_id = user.id
        inner join product on cart.product_id = product.id
        inner join statistic on statistic.cart_id = cart.id
        where statistic.id = ${id}`);
  }

  async deleteAllCarts(): Promise<{}> {
    await this.statisticRepo.clear();
    return 'Bạn đã xoá tất cả đơn hàng!';
  }

  async deleteCartById(id: number): Promise<{}> {
    await this.statisticRepo.delete(id);
    return { message: `Bạn đã xoá đơn hàng có Id là ${id} ra khỏi hệ thống!` };
  }
}
