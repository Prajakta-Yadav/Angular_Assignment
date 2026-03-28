import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userform',
  imports: [FormsModule],
  templateUrl: './userform.html',
  styleUrl: './userform.css',
})
export class Userform {

  name:string = '';
  email:string = '';
  password:string ='';
  message:string = '';

  isvalid():boolean{
    return  this.name.trim() !== '' && this.email.trim() !== '' && this.password.trim() !== '';
  }

  isValid():boolean{
    return  this.name.trim() == '' && this.email.trim() !== '' && this.password.trim() == '';
  }

  submit(){
   
      this.message = "Form Submitted";

      this.name = ''
      this.email = ''
      this.password =''
    
  }

  reset(){

    this.message =''; 
    this.name = ''
    this.email = ''
    this.password =''

  }
}
