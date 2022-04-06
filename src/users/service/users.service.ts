import { Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "../entities/user.entity";
import { UserIntegration } from "../integration/user.integration";

@Injectable()
export class UsersService {

  constructor(
    private userIntegration: UserIntegration
  ) { }

  create(createUserDto: CreateUserDto): Observable<User>{
    return this.userIntegration.create(createUserDto);
  }

  findAll(): Observable<Array<User>> {
    return this.userIntegration.findAll()
      .pipe(response => response.pipe(
        map(users => users.map(user => {
          //mapeamento só pra exemplificar alguma lógica
          user.name = user.name + " teste ";
          return user;
        }
        ))));
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
