import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "../domain/user.repository";
import type { CreateUserDto } from "./dto/register.dto";
import { User } from "../domain/user.entity";
import * as bcrypt from "bcrypt"


@Injectable()
export class RegisterUserUseCase {
    constructor(
        @Inject(UserRepository)
        private readonly userRepository: UserRepository) {}

    async execute(createUserDto: CreateUserDto): Promise<User> {
        //checking for existing email
        const exists = await this.userRepository.login(createUserDto.email);

        if(exists){
            throw new ConflictException("Email already exists");
        }
        
        //hashing user password
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        // createing user entity
        const user = new User({
            username: createUserDto.username,
            email: createUserDto.email,
            password: hashedPassword,
        });

        // saving to the database
        return await this.userRepository.register(user);
    }
}