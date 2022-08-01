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

  //create user
  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  }

  //update user using put
  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
  }
  
  //update user using patch
  patchUser(user: User): Observable<User>{
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user)
  }
  
  //delete user
  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`)
  }
}
