import { IsNotEmpty, IsString, IsDateString, IsNumber, Min, Max } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  declare transactionId: string;

  @IsNumber()
  @IsNotEmpty()
  declare userId: number;

  @IsNumber()
  @IsNotEmpty()
  declare topicId: number;

  @IsDateString()
  @IsNotEmpty()
  declare testedAt: Date;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(100)
  declare score: number;
}
