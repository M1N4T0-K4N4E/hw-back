import { IsEnum, IsNumber, IsString, Max, Min, IsArray, IsOptional } from 'class-validator';
import { Role } from '../entities/user.entity';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  declare fullName?: string;

  @IsOptional()
  @IsNumber()
  @Min(10)
  @Max(99)
  declare age?: number;

  @IsOptional()
  @IsString()
  declare email?: string;

  @IsOptional()
  @IsEnum(Role)
  declare role?: Role;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  declare topics?: string[];
}
