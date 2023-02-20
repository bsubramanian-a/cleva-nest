export class CreateUserDto {
    readonly id: number;
    readonly firstname: string;
    readonly lastname: string;
    readonly password: string;
    readonly email: string;
    readonly phone?: string;
    readonly address?:string;
}
