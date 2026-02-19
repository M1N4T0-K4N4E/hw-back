import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction)
    private readonly transactionModel: typeof Transaction,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({
      transactionId: createTransactionDto.transactionId,
      userId: createTransactionDto.userId,
      topicId: createTransactionDto.topicId,
      testedAt: createTransactionDto.testedAt,
      score: createTransactionDto.score,
    });
  }

  findAll() {
    return this.transactionModel.findAll();
  }

  findOne(userId: number, topicId: number) {
    return this.transactionModel.findOne({ where: { userId, topicId } });
  }

  findByUserId(userId: number) {
    return this.transactionModel.findAll({ where: { userId } });
  }

  async update(userId: number, topicId: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.findOne(userId, topicId);
    return transaction?.update(updateTransactionDto);
  }

  remove(userId: number, topicId: number) {
    return this.transactionModel.destroy({ where: { userId, topicId } });
  }
}
