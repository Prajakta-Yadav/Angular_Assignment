import { Component } from '@angular/core';
import { CommonModule } from '@angular/common' ;

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {

  date:string ="29 March 2026";

  isVisible: boolean = true;

  isChecked: boolean = false;

  toggle(){
    if(this.isVisible){
      this.isVisible = false;
    }
    else{
      this.isVisible = true;
    }
  }

  item = ['Apple', 'Banana', 'Mango'];

  arr = [10, 30, 45, 87, 65];

  students =[
    { id:1, name: 'Harry'},
    {id:2, name: 'Potter'}, 
  ]

  role: string = 'user';


  
}
