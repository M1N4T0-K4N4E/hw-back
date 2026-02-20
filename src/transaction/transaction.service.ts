import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';
import { Topic } from 'src/topic/entities/topic.entity';
import { json } from 'sequelize';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction)
    private readonly transactionModel: typeof Transaction,
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(Topic)
    private readonly topicModel: typeof Topic,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    const { userId, topicId } = createTransactionDto;
    const user = this.userModel.findOne({ where: { id: userId } });
    if (!user) {
      return json({ error: 'User not found' });
    }

    const topic = this.topicModel.findOne({ where: { id: topicId } });
    if (!topic) {
      return json({ error: 'Topic not found' });
    }

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
