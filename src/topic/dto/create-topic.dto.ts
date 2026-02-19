import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTopicDto {
  @IsString()
  @IsNotEmpty()
  declare name: string;

  @IsString()
  @IsOptional()
  declare description?: string;
}
