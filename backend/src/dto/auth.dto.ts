import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Match } from 'src/decorators/match.decorator';

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