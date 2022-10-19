import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ConfirmedDto {
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsOptional()
  status?: string;
}
