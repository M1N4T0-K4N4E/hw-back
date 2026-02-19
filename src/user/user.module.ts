import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Topic } from '../topic/entities/topic.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, Topic])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
