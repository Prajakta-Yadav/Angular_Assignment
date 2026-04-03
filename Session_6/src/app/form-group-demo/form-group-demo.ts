import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-form-group-demo',
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './form-group-demo.html',
  styleUrl: './form-group-demo.css',
})
export class FormGroupDemo {

  private fb  = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required]
  });

  onSubmit(){
    console.log(this.form.value)
  }

}
