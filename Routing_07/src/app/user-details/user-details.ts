import { Component, signal } from '@angular/core';
import { UserService } from '../Services/user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {

   UserData: any = signal("");

  constructor (public userService: UserService, public route:ActivatedRoute){}

  ngOnInit(){
    const data = this.userService.userList();
    this.route.params.subscribe((params) =>{
      const filteredData = data.filter((item) => item.id == params['id'])
    
      this.UserData.set(filteredData[0])
    })
    
  }


}
