import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router:Router) {}

  user ={
    username: '',
    email:'',
    password: ''
  }

  demoUser = {
    username: 'Prajakta',
    email:'prajaktay@81gmail.com',
    password: '123456'
  }

  onSubmit(form: any){
   
    if(form.value.username === this.demoUser.username && form.value.email === this.demoUser.email && form.value.password === this.demoUser.password){
      this.router.navigate(['/student'])
    } else{
      confirm("Please Enter correct credentials")
      form.reset();
    }
  }

}
