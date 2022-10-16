import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CheckDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  verificationCode: number;
}
