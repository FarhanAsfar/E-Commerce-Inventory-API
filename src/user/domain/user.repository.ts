import { User } from "./user.entity";

export interface UserRepository {
    create(user: User): Promise<User>;

    findByEmail(email: string): Promise<User | null>;
}