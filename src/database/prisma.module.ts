import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global() // this will make PrismaService available everywhere
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})

export class PrismaModule {}