import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { PrismaUserRepository } from './user/infrastructure/prisma-user.repository';
import { RegisterUserUseCase } from './user/application/register-user.usecase';
import { UserModule } from './user/user.module';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './user/auth/auth.module';

@Module({
    imports: [UserModule, PrismaModule, AuthModule],
    controllers: [AppController],
    providers: [
        AppService,
        PrismaService,
        {
            provide: 'UserRepository',
            useClass: PrismaUserRepository,
        },
        RegisterUserUseCase,
    ],
    exports: ['UserRepository']
})
export class AppModule {}
