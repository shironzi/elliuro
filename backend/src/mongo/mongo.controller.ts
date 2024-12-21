import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { CreateMongoDto } from './dto/create-mongo.dto';
import { UpdateMongoDto } from './dto/update-mongo.dto';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @Post()
  create(@Body() createMongoDto: CreateMongoDto) {
    return this.mongoService.create(createMongoDto);
  }

  @Get()
  findAll() {
    return this.mongoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mongoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMongoDto: UpdateMongoDto) {
    return this.mongoService.update(+id, updateMongoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mongoService.remove(+id);
  }
}
