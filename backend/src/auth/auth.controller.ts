
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { User } from '@prisma/client';
import { CreateUserDto } from "src/dto/auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(201)
    @Post('register')
    async create(@Body() createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
        const { username, email, name, password } = createUserDto;
        return await this.authService.register({
            username,
            email,
            name,
            password
        })
    }
}
