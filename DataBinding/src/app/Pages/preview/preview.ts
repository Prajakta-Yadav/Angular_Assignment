import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview',
  imports: [FormsModule],
  templateUrl: './preview.html',
  styleUrl: './preview.css',
})
export class Preview {
  title: string ='';
  description: string = '';

  
  isValidform(): boolean {
    return this.title.trim() !== '' && this.description.trim() !== '';
  }

  save(){
     alert("saved");
  }

}
