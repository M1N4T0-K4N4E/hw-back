import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Topic } from '../topic/entities/topic.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(Topic)
    private readonly topicModel: typeof Topic,
  ) {}

  create(createUserDto: CreateUserDto) {
    const { fullName, age, email, role, topics } = createUserDto;
    return this.userModel.create({
      fullName: fullName,
      email: email,
      age: age,
      role: role,
      topics: topics || [],
    });
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    {
      const user = await this.findOne(id);
      return user?.update(updateUserDto);
    }
  }

  async remove(id: number) {
    return this.userModel.destroy({ where: { id: id } });
  }

  async addTopic(userId: number, topicId: number) {
    const user = await this.findOne(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const topic = await this.topicModel.findOne({ where: { id: topicId } });
    if (!topic) {
      throw new Error('Topic not found');
    }

    const topics = user.topics || [];
    if (!topics.includes(topicId.toString())) {
      topics.push(topicId.toString());
      user.topics = topics;
      return user.save();
    }
    return user;
  }
}
