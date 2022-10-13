import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class EditProductDto {
  @IsString()
  @IsOptional()
  productName?: string;

  @IsString()
  @IsOptional()
  productFiles?: string;

  @IsString()
  @IsOptional()
  productDescription?: string;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  productPrice?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  productQuantity?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  productDiscount?: number;

  @IsString()
  @IsOptional()
  productType?: string;
}
