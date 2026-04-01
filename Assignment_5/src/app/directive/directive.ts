import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hightlight } from '../hightlight';

@Component({
  selector: 'app-directive',
  imports: [CommonModule, FormsModule, Hightlight],
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

//11

nameArray = ["PRAJAKTA", "TEJU", "PRIYANKA", "NANDINI"];

//12

Student = [

  {id: 1, name: "Prajakta", age : 23},
  {id: 2, name: "Prachi", age: 23}, 
  {id: 3, name: "Teju", age: 22},
  {id: 4, name: "Dipti", age : 30}
]

//14

StudResult = [
  {Sname: "Prajakta", mark: 99},
  {Sname: "Teju", mark: 90},
  {Sname: "Priyanka", mark: 100},
  {Sname: "Viraj", mark: 40},
  {Sname: "Arati", mark: 50}
]

DynamicArr: string[] = [];

newitem: string = '';

Additem(){
  if(this.newitem.trim() !== ''){
    this.DynamicArr.push(this.newitem);
    this.newitem == '';
  }
  
}


//16  ngSwitch

SelectedValue: string = ''; 

//17 

role: string = '';


//20 

selectedOption: string = '';

onChange(event: any) {
  console.log('Selected:', event.target.value);
}

//21

username :String = '';

//22

isActive = true;
hasError = false;
isDisabled = true;



//23

isError : boolean = true; 

//24

togglebtn: boolean = true;

}


