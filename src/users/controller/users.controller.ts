import { Controller, Get } from "@nestjs/common";
import { UsersService } from "src/users/service/users.service";


@Controller("log")
export class UsersController {

  constructor(private userService: UsersService){}

  @Get()
  log() {
    this.userService.findAll();
  }
}
