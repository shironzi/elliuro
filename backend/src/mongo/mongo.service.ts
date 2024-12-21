import { Injectable } from '@nestjs/common';
import { CreateMongoDto } from './dto/create-mongo.dto';
import { UpdateMongoDto } from './dto/update-mongo.dto';

@Injectable()
export class MongoService {
  create(createMongoDto: CreateMongoDto) {
    return 'This action adds a new mongo';
  }

  findAll() {
    return `This action returns all mongo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mongo`;
  }

  update(id: number, updateMongoDto: UpdateMongoDto) {
    return `This action updates a #${id} mongo`;
  }

  remove(id: number) {
    return `This action removes a #${id} mongo`;
  }
}
