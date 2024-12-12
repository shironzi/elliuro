import { ConflictException, HttpCode, Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from 'src/dto/auth.dto';


@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

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
                return { message: "hello" }
            }
            return { message: "Registered Successfully" }
        } catch (error) {
            throw error
        }
    }

    async login(data: LoginUserDto): Promise<{ accessToken: string }> {
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
                throw new UnauthorizedException('Username or password is invalid');
            }

            const payload = { sub: user.id, username: user.username }
            const token = await this.jwtService.signAsync(payload)

            return { accessToken: token }
        } catch (error) {
            throw error;
        }
    }
}
