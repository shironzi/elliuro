import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Match } from 'src/common/decorators/match.decorator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string

    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @MinLength(8)
    password: string

    @IsString()
    @MinLength(8)
    @Match('password', { message: 'Password do not match' })
    cPassword: string
}

export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    password: string
}