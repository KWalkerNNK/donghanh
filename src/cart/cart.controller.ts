import { UpdateOrderDto } from './dto/dto.update-order';
import { JwtGuard } from '../auth/guard/guard.jwt';
import { CartService } from './cart.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
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

  @Patch(':id')
  async updateOrder(
    @Param('id', ParseIntPipe) productId: number,
    @Body() dto: UpdateOrderDto,
  ): Promise<{}> {
    return await this.cartService.updateOrder(productId, dto);
  }

  @Delete(':id')
  async deleteOrder(
    @GetUser('id') userId: number,
    @Param('id') productId: number,
  ): Promise<{}> {
    return await this.cartService.deleteOrder(userId, productId);
  }

  @Delete()
  async deleteCart(@GetUser('id') userId: number): Promise<{}> {
    return await this.cartService.deleteCart(userId);
  }
}
