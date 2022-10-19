import { Type } from 'class-transformer';
import { IsNotEmpty, IsInt } from 'class-validator';

export class PurchaseDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  cartId: number;
}
