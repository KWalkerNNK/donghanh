import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  productQuantity?: number;
}
