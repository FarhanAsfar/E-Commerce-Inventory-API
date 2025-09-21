import { User } from "./user.entity";

export interface UserRepository {
    register(user: User): Promise<User>;

    login(email: string): Promise<User | null>;
}