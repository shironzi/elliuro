import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async register(data: Prisma.UserCreateInput): Promise<Omit<User, 'password'>> {

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

        const { password, ...result } = createdUser
        return result
    }
}
