import { Injectable, Inject } from "@nestjs/common";
import { User } from "./models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { USER_REPOSITORY } from "src/core/constants";

@Injectable()
export class UserService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) {}
    
    async create(createUserDto: any): Promise<User> {
        return await this.userRepository.create<User>(createUserDto);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll<User>();
    }

    findOne(id: string): Promise<User> {
        return this.userRepository.findOne<User>({
            where: {
                id,
            },
        });
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.userRepository.update<User>(updateUserDto, {where: {id}});
    }
}