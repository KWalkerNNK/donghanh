import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  productImage: string;

  @IsString()
  @IsOptional()
  productDescription?: string;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  productPrice: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  productDiscount?: number;

  @IsString()
  @IsNotEmpty()
  productType: string;
}
