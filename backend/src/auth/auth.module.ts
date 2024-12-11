import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET || 'a_secret_token',
            signOptions: { expiresIn: '1d' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }
