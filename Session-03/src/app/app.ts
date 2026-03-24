import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Session-03');


  name: string = "Fork Infosystems";

  price : number = 100;
  quantity: number = 20;

  age: number= 30;

  getMessage(){
    return "Welcome";
  }

  changeName(){
    this.name = "CodInt Digitech";
    
  }

  imageUrl =  'https://img.freepik.com/free-photo/magical-floating-island-fantasy-landscape_23-2151851411.jpg';

  isDisabled: boolean = true; 
}

