import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning_project';

  users:any
  constructor(private uService:UsersService){
    console.log(uService.users())
    this.users=uService.users()
  }
  
}
