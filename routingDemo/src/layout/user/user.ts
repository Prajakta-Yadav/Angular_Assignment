import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  constructor(public route:ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe((params) =>{
      console.log(params); 
    })
  }

}
