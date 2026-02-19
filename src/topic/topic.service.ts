import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Topic } from './entities/topic.entity';

@Injectable()
export class TopicService {
  constructor(
    @InjectModel(Topic)
    private readonly topicModel: typeof Topic,
  ) {}

  create(createTopicDto: CreateTopicDto) {
    return this.topicModel.create({
      name: createTopicDto.name,
      description: createTopicDto.description,
    });
  }

  findAll() {
    return this.topicModel.findAll();
  }

  findOne(id: number) {
    return this.topicModel.findOne({ where: { id: id } });
  }

  async update(id: number, updateTopicDto: UpdateTopicDto) {
    const topic = await this.findOne(id);
    return topic?.update(updateTopicDto);
  }

  remove(id: number) {
    return this.topicModel.destroy({ where: { id: id } });
  }
}
