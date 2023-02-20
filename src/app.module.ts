import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal:true}), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
