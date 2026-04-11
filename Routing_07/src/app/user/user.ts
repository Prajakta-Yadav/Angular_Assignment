import { Component, signal } from '@angular/core';
import { UserService } from '../Services/user-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  UserData: any = signal("");

  constructor (public userService:UserService){}

  ngOnInit(){
    const data = this.userService.userList();
    this.UserData.set(data)
  }

  

}
