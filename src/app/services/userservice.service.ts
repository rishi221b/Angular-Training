import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  

  constructor(private httpClient: HttpClient) { }

  RegisterUser(user: User):Observable<boolean> {
    return this.httpClient.post<boolean>('https://localhost:7229/api/User/AddUser',user)
  }
  LoginUser(login:Login):Observable<string>{
    return this.httpClient.post<string>('https://localhost:7229/api/User/Login',login);
  }
  GetAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://localhost:7229/api/User/getAllUsers');
  }
  BlockUser(courseId: number): Observable<boolean> {
    const url = 'https://localhost:7229/api/User/DeleteUser?id=' + courseId;
    return this.httpClient.delete<boolean>(url);
  }
}
