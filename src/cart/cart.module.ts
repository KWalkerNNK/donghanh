import { CartController } from './cart.controller';
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from '../database/entity/entity.cart';
import { Statistic } from '../database/entity/entity.statistic';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Statistic])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
