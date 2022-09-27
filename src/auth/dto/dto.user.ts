import { IsEmail, IsString } from 'class-validator';

export class userDto {
  id: number;

  @IsString()
  fullName: string;

  @IsString()
  phoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsString()
  password: string;

  @IsString()
  isRole: string;
}
