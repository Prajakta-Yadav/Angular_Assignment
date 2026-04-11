import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  name = signal('');
  id = signal(0)
  age =signal(0)

  constructor(public route:ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe((params) =>{
      console.log(params); 

      this.name.set(params['name'])
      this.age.set(params['age'])
      this.id.set(params['id'])
    })
  }

}
