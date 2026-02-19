import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsNumber,
  IsEnum,
  Min,
  Max,
  IsArray,
  IsOptional,
  Length,
} from 'class-validator';
import { Role } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  declare fullName: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(10)
  @Max(99)
  declare age: number;

  @IsEmail()
  @IsNotEmpty()
  declare email: string;

  @IsEnum(Role)
  @IsNotEmpty()
  declare role: Role;

  @IsArray()
  @IsNumber()
  @IsOptional()
  declare topics?: number[];
}