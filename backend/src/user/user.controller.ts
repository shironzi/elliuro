import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('properties')
  async getProperties() {
    return await this.userService.getProperties()
  }
}
