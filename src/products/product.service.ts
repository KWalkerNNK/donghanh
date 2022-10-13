import { Product } from './../database/entity/entity.product';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/dto.create-product';
import { InjectRepository } from '@nestjs/typeorm';
import { EditProductDto } from './dto/dto.edit-product';
import { MESSAGE } from '.././utils/util.message';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async getProducts() {
    return await this.productRepo.find();
  }

  async getProductById(id: number) {
    return await this.productRepo.findOneBy({ id });
  }

  async createProduct(dto: CreateProductDto) {
    return await this.productRepo.save(dto);
  }

  async editProductById(id: number, dto: EditProductDto): Promise<{}> {
    await this.productRepo.update(id, dto);
    return { ...dto };
  }

  async deleteProductById(id: number) {
    await this.productRepo.delete(id);
    return { message: MESSAGE.PRODUCT_REMOVED };
  }

  async deleteProducts() {
    await this.productRepo.clear();
    return { message: MESSAGE.PRODUCTS_REMOVED };
  }
}
