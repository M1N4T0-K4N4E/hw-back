import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';
import { Role } from '../entities/user.entity';

export class UpdateUserDto {
  @IsString()
  declare fullName: string;

  @IsNumber()
  @Min(10)
  @Max(99)
  declare age: number;

  @IsString()
  declare email: string;

  @IsEnum(Role)
  declare role: Role;
}
