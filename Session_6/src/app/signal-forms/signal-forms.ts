import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, maxLength, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField, CommonModule],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {

  loginModel = signal({
    email: '',
    password: ''
  })

  loginForm = form(this.loginModel, (FormField) =>{
    required(FormField.email, {message: "please enter email address"});
    minLength(FormField.email, 5,  {message:"please enter valid email"});
    email(FormField.email, {message: "please enter valid email address"}); 

    required(FormField.password, {message: "please enter a password"});
    minLength(FormField.password, 5, {message:"please enter valid password"});
    maxLength(FormField.password, 10, {message: "please enter valid password"}); 
  })

  login(){
    console.log(this.loginForm.email().value());
    console.log(this.loginForm.password().value());

  }

  reset(){
    this.loginForm.email().value.set('')
    this.loginForm.password(). value.set('')
  }
}
