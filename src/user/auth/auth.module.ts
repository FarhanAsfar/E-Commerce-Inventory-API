import { Module } from '@nestjs/common';
import { UserModule } from '../user.module';
import { AuthController } from '../interfaces/controllers/auth.controller';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
})
export class AuthModule {}
