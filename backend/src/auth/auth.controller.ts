import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

import { CreateUserDto, LoginUserDto } from "src/auth/auth.dto";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    async create(@Body() createUserDto: CreateUserDto): Promise<{ message: string }> {
        const { username, email, name, password } = createUserDto;
        return await this.authService.register({
            username,
            email,
            name,
            password
        })
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
        return await this.authService.login(loginUserDto)
    }
}
