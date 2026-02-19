import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Topic } from './entities/topic.entity';

@Module({
  imports: [SequelizeModule.forFeature([Topic])],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
