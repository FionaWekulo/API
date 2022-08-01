import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/interfaces/user';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  //Many users
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }

  //single user
  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`)
  }
}
