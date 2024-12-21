import { Test, TestingModule } from '@nestjs/testing';
import { SearchPropertyService } from './search-property.service';

describe('SearchPropertyService', () => {
  let service: SearchPropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchPropertyService],
    }).compile();

    service = module.get<SearchPropertyService>(SearchPropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
