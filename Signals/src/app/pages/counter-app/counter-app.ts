import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {

  count = signal(0);

  increase(){
    this.count.update((val) => val +1);
  }

  decrease(){

   if(this.count() > 0){
     this.count.update((val) => val -1);
   }
  }

  reset(){
    this.count.set(0); 
  }
}
