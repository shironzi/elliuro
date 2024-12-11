import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { ConflictException, UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, {
        provide: PrismaService,
        useValue: {
          user: {
            findFirst: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
          },
        },
      },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('fake-jwt-token')
          }
        }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should throw ConflictException if username is taken', async () => {
    jest.spyOn(prisma.user, 'findFirst').mockResolvedValueOnce({
      username: 'testuser',
      email: 'test@example.com',
    } as any);

    await expect(service.register({
      username: 'testuser',
      email: 'test@example.com',
      name: 'Test',
      password: 'password123',
    })).rejects.toThrow(ConflictException);
  });

  it('should throw UnauthorizedException if user does not exist during login', async () => {
    jest.spyOn(prisma.user, 'findUnique').mockResolvedValueOnce(null);
    jest.spyOn(bcrypt, 'compare').mockImplementationOnce(async () => false);

    await expect(service.login({
      username: 'nonexistentuser',
      password: 'password123',
    })).rejects.toThrow(UnauthorizedException);
  });

  it('should return accessToken on successful login', async () => {
    jest.spyOn(prisma.user, 'findUnique').mockResolvedValueOnce({
      id: 1,
      username: 'testuser',
      password: 'hashedpassword',
    } as any);
    jest.spyOn(bcrypt, 'compare').mockImplementation(async () => true);
    jest.spyOn(jwtService, 'sign').mockReturnValueOnce('fake-jwt-token');

    const result = await service.login({
      username: 'testuser',
      password: 'password123',
    });

    expect(result).toEqual({ accessToken: 'fake-jwt-token' });
  });
});
