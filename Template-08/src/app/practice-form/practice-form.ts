import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './practice-form.html',
  styleUrl: './practice-form.css',
})
export class PracticeForm {

  userDetails: any = undefined

  addUser(data:NgForm){
    console.log(data)

    this.userDetails = data

  }

}
