import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  step:number = 1;
  count: number = 0;

  increase(){
    this.count += Number(this.step);
  }

  decrease(){
    this.count -= Number(this.step);
  }

  reset(){
    this.count =0;
  }

}
