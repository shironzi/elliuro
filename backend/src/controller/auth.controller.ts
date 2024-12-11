import { AuthService } from './../services/auth.service';
import { Body, Controller, Post } from "@nestjs/common";
import { User } from '@prisma/client';
import { CreateUserDto } from "src/dto/auth.dto";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        const { username, email, name, password } = createUserDto;
        return this.authService.register({
            username,
            email,
            name,
            password
        })
    }
}