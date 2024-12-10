import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "src/dto/auth.dto";

@Controller('auth')
export class AuthController {

    @Post('register')
    async create(@Body() createUserDto: CreateUserDto) {
        return "Creating User";
    }
}