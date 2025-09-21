import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/user/application/dto/login.dto';
import { CreateUserDto } from 'src/user/application/dto/register.dto';
import { LoginUserUseCase } from 'src/user/application/login-user.usecase';
import { RegisterUserUseCase } from 'src/user/application/register-user.usecase';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly loginUserUseCase: LoginUserUseCase,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.registerUserUseCase.execute(createUserDto);
  }

  @Post('login')
  async login(@Body() CreateUserDto: LoginDto) {
    return await this.loginUserUseCase.execute(CreateUserDto.email, CreateUserDto.password);
  }
}
