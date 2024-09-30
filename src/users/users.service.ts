import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const attraction = await this.usersRepository.create(createUserDto);
    const toCrete = this.usersRepository.insert(attraction);
    return toCrete;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(uuid: string) {
    return this.usersRepository.findOneBy({ uuid: uuid });
  }

  update(uuid: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(uuid, updateUserDto);
  }

  remove(uuid: string) {
    return this.usersRepository.delete(uuid);
  }
}
