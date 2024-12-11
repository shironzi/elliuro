import { ConflictException, HttpCode, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async register(data: Prisma.UserCreateInput): Promise<{ message: string }> {

        try {
            const existingUsername = await this.prisma.user.findFirst({
                where: {
                    username: data.username
                }
            })

            const exisistingEmail = await this.prisma.user.findFirst({
                where: {
                    email: data.email
                }
            })

            if (existingUsername) {
                throw new ConflictException("Username already been taken!")
            }

            if (exisistingEmail) {
                throw new ConflictException("Email already been taken")
            }

            const salt = 10
            const hashedPassword = await bcrypt.hash(data.password, salt)

            data.password = hashedPassword;

            const createdUser = await this.prisma.user.create({
                data
            })

            if (!createdUser) {
                return { message: "Registration failed" }
            }
            return { message: "Registration Successfully" }
        } catch (error) {
            throw error
        }
    }

    async login(data: LoginUserDto): Promise<{ message: string }> {

        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    username: data.username
                }
            })

            let isPasswordValid = false
            if (user) {
                isPasswordValid = await bcrypt.compare(data.password, user.password);
            } else {
                await bcrypt.compare(data.password, '$2b$12$invalidsaltinvalidsaltinv')
            }

            if (!user || !isPasswordValid) {
                return { message: "Username Or Password is invalid" }
            }

            return { message: "Login Successfully" }
        } catch (error) {
            throw error;
        }
    }
}
