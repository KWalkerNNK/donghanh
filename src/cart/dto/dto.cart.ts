import { Type } from 'class-transformer';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CartDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  productId: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  productQuantity: number;
}
