import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CheckDto {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  verificationCode: number;
}
