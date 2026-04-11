import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  imports: [],
  templateUrl: './student-layout.html',
  styleUrl: './student-layout.css',
})
export class StudentLayout {

  userName = signal('')
  age = signal('')
  constructor(public route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params); 

      this.userName.set(params['name'])
      this.age.set(params['age'])
    })
  }

}
