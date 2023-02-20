import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { User } from "./models/user.model";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()

    create(@Body() createUserDto: any) {
        return this.userService.create(createUserDto.data);
    }

    @Get()
    async fetchAll(@Res() response) {
        const users = await this.userService.findAll();
        return response.status(HttpStatus.OK).json({
            users
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const user = await this.userService.findOne(id);
        return response.status(HttpStatus.OK).json({
            user
        })
    }
}