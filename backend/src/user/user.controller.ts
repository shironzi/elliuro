import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('properties')
  async getProperties(@Res() res: Response) {
    const properties = await this.userService.getProperties();

    res.json({ properties });
  }
}
