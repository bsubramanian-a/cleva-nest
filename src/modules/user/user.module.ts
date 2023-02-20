import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserController } from "./user.controller";
import { User } from "./models/user.model";
import { UserService } from "./user.service";
import { usersProviders } from "./users.providers";

@Module({
    providers: [UserService, ...usersProviders],
    controllers: [UserController]
})
export class UserModule {}