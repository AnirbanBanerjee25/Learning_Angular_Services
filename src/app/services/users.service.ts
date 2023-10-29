import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  users(){
    return[
      {"id":1,"name":"John Doe","email":"john.doe@gmail.com"},
      {"id":2,"name":"Jane Smith","email":"jane.smith@gmail.com"}

    ]
  }
}
