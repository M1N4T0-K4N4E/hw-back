import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsNumber,
  IsEnum,
  Min,
  Max,
} from 'class-validator';
import { Role } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
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
}
