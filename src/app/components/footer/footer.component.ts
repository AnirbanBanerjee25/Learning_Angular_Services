import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users:any
  constructor(private uService:UsersService){
    console.log(uService.users())
    this.users=uService.users()
  }

}
