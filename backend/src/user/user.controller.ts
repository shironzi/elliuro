import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('properties')
  async getProperties(@Res() res: Response) {
    const properties = await this.userService.getProperties();
    res.json({ properties });
  }

  @Get('image/:imageName')
  async getImage(@Param('imageName') imageName: string, @Res() res: Response) {
    const imagePath = join(process.cwd(), 'path/to/images', `${imageName}.png`); // Adjust the path as needed

    if (!existsSync(imagePath)) {
      throw new NotFoundException('Image not found');
    }

    const imageStream = createReadStream(imagePath);
    imageStream.on('error', (err) => {
      console.error('Error reading image file:', err);
      res.status(500).send('Error reading image file');
    });

    imageStream.pipe(res);
  }
}