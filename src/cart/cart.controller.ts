import { JwtGuard } from '../auth/guard/guard.jwt';
import { CartService } from './cart.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CartDto } from './dto/dto.cart';
import { GetUser } from '../auth/decorators/decorator.get-user';

@UseGuards(JwtGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  async getCart(@GetUser('id') userId: number) {
    return await this.cartService.getCart(userId);
  }

  @Post()
  async addOrder(
    @GetUser('id') userId: number,
    @Body() dto: CartDto,
  ): Promise<{}> {
    return await this.cartService.addOrder(userId, dto);
  }
}
