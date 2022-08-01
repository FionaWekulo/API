import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users!: User[];
  title = 'API';
  private user: any = {
      'id': 2,
      'name': 'Abigael Wekulo',
      'username': 'Abigael',
      'email': 'alright@april.biz',
      /*'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496'
        }
      },
      'phone': '1-770-736-8031 x56442',
      'website': 'hildegard.org',
      'company': {
        'name': 'Get Arrayus',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
      }*/
  }
  
  constructor(private userService: UserService) {}
  ngOnInit(): void {
   this.onGetUsers();
   //this.onGetUser();
   //this.onCreateUser();
   //this.onUpdateUser();
   //this.onPatchUser();
   //this.onDeleteUser();
  }

  onGetUsers(): void{
    this.userService.getUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      },
      (error: any) => console.log(error),
      () => console.log('Done getting users'),
    );
  }

  
  onGetUser(): void{
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting user'),
    );
  }

  
  onCreateUser(): void{
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user'),
    );
  }

  
  onUpdateUser(): void{
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done updating user'),
    );
  }

  onPatchUser(): void{
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done patching user'),
    );
  }
  
  onDeleteUser(): void{
    this.userService.deleteUser(7).subscribe(
      (response) => console.log('Response from delete', response),
      (error: any) => console.log(error),
      () => console.log('Done deleting user'),
    );
  }

 /* constructor() {
    type HttpResponse = { code: number, data: string};

    const observable = new Observable<HttpResponse>(subscriber => {
      console.log('Inside subscriber..');
      subscriber.next({ code: 200, data: 'this is data 1...'});
      subscriber.next({ code: 200, data: 'this is data 2...'});
      subscriber.next({ code: 200, data: 'this is data 3...'});
      //subscriber.error({ code: 500, msg: 'An error occurred'})
      setTimeout(() => {
        subscriber.next({ code: 200, data: 'this is data more data....'});
        subscriber.complete()
      }, 3*1000);
      console.log('subscriber is done emitting...');
    });
  
    observable.subscribe({
      next(response: HttpResponse){
        console.log('got Response: ', response);
      },
      error(error: any){
        console.error('Something wrong occurred: ', error);
      },
      complete(){
        console.log('done');
      }
      
    });


  }*/
}

