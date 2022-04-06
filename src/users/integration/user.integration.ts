import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { AxiosResponse } from 'axios'
import { User } from "src/users/entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserIntegration {

    constructor(private http: HttpService) { }


    //chamada para outra api que retorna users
    public findAll(): Observable<User[]> {
        return this.http.get('http://localhost:8080/users')
            .pipe(
                map((axios: AxiosResponse<User[]>) => {
                    return axios.data;
                })
            );
    }

    public create(createUserDto: CreateUserDto): Observable<User> {
        console.log(createUserDto);
        return this.http.post(
            'http://localhost:8080/users',
            createUserDto
        ).pipe(
            map((axios: AxiosResponse<User>) => {
                return axios.data;
            })
        );
    }
}