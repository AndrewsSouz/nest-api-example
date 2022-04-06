import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserIntegration } from './users/integration/user.integration';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { HttpModule } from '@nestjs/axios';
import { LoggerConfig } from "./users/graylog/logger.config";

@Module({
  imports: [UsersModule, HttpModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, UserIntegration, LoggerConfig],
})
export class AppModule {}
