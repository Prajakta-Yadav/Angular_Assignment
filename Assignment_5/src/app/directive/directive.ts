import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive {

  age :number = 23;



  //1

  isVisible:boolean = false;

toggle(){
  if(this.isVisible){
    this.isVisible = false;
  }else{
    this.isVisible = true;
  }

  
}

// 5 

arr = [
  "Aditi", "Trupti", "Vishakha", "Prachi"
]

//9

isloggedin = true;

login(){
  this.isloggedin = true;
}

logout(){
  this.isloggedin = false;

}

//10 

showForm = true;

showform(){
  this.showForm = !this.showForm;
}
}
