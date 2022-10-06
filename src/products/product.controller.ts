import { EditProductDto } from './dto/dto.edit-product';
import { CreateProductDto } from './dto/dto.create-product';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Roles } from 'src/auth/decorators/decorator.index';
import { Role } from 'src/enums/enum.role';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) productId: number) {
    return await this.productService.getProductById(productId);
  }

  @Roles(Role.Admin)
  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return await this.productService.createProduct(dto);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  async editProductById(
    @Param('id', ParseIntPipe) productId: number,
    @Body() dto: EditProductDto,
  ) {
    return await this.productService.editProductById(productId, dto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async deleteProductById(@Param('id', ParseIntPipe) productId: number) {
    return await this.productService.deleteProductById(productId);
  }
}
