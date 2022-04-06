import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { UserIntegration } from "./integration/user.integration";
import { UsersController } from "./controller/users.controller";
import { UsersService } from "./service/users.service";

@Module({
  imports: [HttpModule],
  controllers: [UsersController],
  providers: [UsersService, UserIntegration]
})
export class UsersModule {
}
