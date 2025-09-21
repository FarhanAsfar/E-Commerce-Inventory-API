export class User {
    private _id: number;
    private _username: string;
    private _email: string;
    private _password: string;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor(props: {
        id?: number;
        username: string;
        email: string;
        password: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this._id = props.id ?? 0; 
        this._username = props.username;
        this._email = props.email.toLowerCase(); 
        this._password = props.password;
        this._createdAt = props.createdAt ?? new Date();
        this._updatedAt = props.updatedAt ?? new Date();
    }

    get id(): number {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
        this.touch();
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value.toLowerCase();
        this.touch();
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
        this.touch();
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    private touch() {
        this._updatedAt = new Date();
    }
}