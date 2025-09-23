import { User } from "./user.entity";

export abstract class UserRepository {
    abstract register(user: User): Promise<User>;

    abstract login(email: string): Promise<User | null>;
}