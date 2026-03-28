import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  username: string = '';
  password: any = '';

  isValid(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '';
  }

  login(){
    alert("login sucessfully...");
  }

}
