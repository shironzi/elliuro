import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) { }


}
