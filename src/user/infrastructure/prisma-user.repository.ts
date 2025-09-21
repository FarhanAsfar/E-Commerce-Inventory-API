import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { UserRepository } from "../domain/user.repository";
import { User } from "../domain/user.entity";


@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async register(user: User): Promise<User> {
        const created = await this.prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: user.password,
            },
        });

        return new User ({
            id: created.id,
            username: created.username,
            email: created.email,
            password: created.password,
            createdAt: created.createdAt,
            updatedAt: created.updatedAt,
        });
    }

    async login(email: string): Promise<User | null> {
        const exists = await this.prisma.user.findUnique({
            where: {
                email,
            }
        });
        if(!exists) return null;

        return new User({
            id: exists.id,
            username: exists.username,
            email: exists.email,
            password: exists.password,
            createdAt: exists.createdAt,
            updatedAt: exists.updatedAt,
        });
    }
}