import { Test, TestingModule } from '@nestjs/testing';
import { SearchPropertyController } from './search-property.controller';
import { SearchPropertyService } from './search-property.service';

describe('SearchPropertyController', () => {
  let controller: SearchPropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchPropertyController],
      providers: [SearchPropertyService],
    }).compile();

    controller = module.get<SearchPropertyController>(SearchPropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
