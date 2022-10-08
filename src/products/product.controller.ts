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
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Roles } from 'src/auth/decorators/decorator.index';
import { Role } from 'src/enums/enum.role';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

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

  // @Roles(Role.Admin)
  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './upload',
        async filename(req, file, callback) {
          const uniqueSuffix: string = await `${Date.now()}-${Math.round(
            Math.random() * 1e9,
          )}`;
          const name: string = file.originalname.split('.')[0];
          const ext: string = extname(file.originalname);
          const fileName: string = `${name}-${uniqueSuffix}${ext}`;
          callback(null, fileName);
        },
      }),
    }),
  )
  async createProduct(
    @Body() dto: CreateProductDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    let sub: string = '';
    for (let i = 0; i < files.length; i++) {
      sub += files[i].filename + ', ';
    }
    dto.productImage = '{' + sub + '}';
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
