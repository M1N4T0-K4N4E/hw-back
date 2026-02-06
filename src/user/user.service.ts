import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto) {
    const { fullName, age, email, role } = createUserDto;
    return this.userModel.create({
      fullName: fullName,
      email: email,
      age: age,
      role: role,
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

  remove(id: number) {
    return this.userModel.destroy({ where: { id: id } });
  }
}
