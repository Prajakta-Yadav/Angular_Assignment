import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-button',
  imports: [FormsModule],
  templateUrl: './dynamic-button.html',
  styleUrl: './dynamic-button.css',
})
export class DynamicButton {

  email: string = '';

  isValidemail(): boolean {
    return this.email.trim() !== '';
  }

  submit(){
    alert('Submitted:' + this.email);
  }

}
