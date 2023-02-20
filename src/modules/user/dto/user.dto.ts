export class UserDto {
    readonly id: number;
    readonly firstname: string;
    readonly lastname: string;
    readonly email: string;
    readonly password: string;
    readonly phone?: string;
    readonly address?:string;
}