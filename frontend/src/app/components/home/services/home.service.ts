import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

export type User = {
  nome: string;
  email: string;
  telefone: string;
}

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  saveUser(user : User){
    return this.http.post(`http://localhost:8080/users`, user).pipe(take(1))
  }
}