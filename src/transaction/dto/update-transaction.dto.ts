import { IsOptional, IsString, IsDateString, IsNumber, Min, Max } from 'class-validator';

export class UpdateTransactionDto {
  @IsOptional()
  @IsString()
  declare transactionId?: string;

  @IsOptional()
  @IsNumber()
  declare userId?: number;

  @IsOptional()
  @IsNumber()
  declare topicId?: number;

  @IsOptional()
  @IsDateString()
  declare testedAt?: Date;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  declare score?: number;
}
