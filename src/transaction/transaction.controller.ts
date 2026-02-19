import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':userId')
  findByUserId(@Param('userId') userId: string) {
    return this.transactionService.findByUserId(+userId);
  }

  @Get(':userId/:topicId')
  findOne(@Param('userId') userId: string, @Param('topicId') topicId: string) {
    return this.transactionService.findOne(+userId, +topicId);
  }

  @Patch(':userId/:topicId')
  update(@Param('userId') userId: string, @Param('topicId') topicId: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+userId, +topicId, updateTransactionDto);
  }

  @Delete(':userId/:topicId')
  remove(@Param('userId') userId: string, @Param('topicId') topicId: string) {
    return this.transactionService.remove(+userId, +topicId);
  }
}
