import { Test, TestingModule } from '@nestjs/testing';
import { MongoController } from './mongo.controller';
import { MongoService } from './mongo.service';

describe('MongoController', () => {
  let controller: MongoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongoController],
      providers: [MongoService],
    }).compile();

    controller = module.get<MongoController>(MongoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
