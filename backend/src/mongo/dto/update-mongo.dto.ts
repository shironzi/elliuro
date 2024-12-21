import { PartialType } from '@nestjs/swagger';
import { CreateMongoDto } from './create-mongo.dto';

export class UpdateMongoDto extends PartialType(CreateMongoDto) {}
