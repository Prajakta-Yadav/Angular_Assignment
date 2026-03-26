import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


  name:string ="This is belong in Home Page";

  welcome(){
    alert("welcome home"); 
  }
}
