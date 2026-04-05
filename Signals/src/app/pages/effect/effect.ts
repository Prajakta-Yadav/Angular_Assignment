import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {

  speed = signal(0);

  color = "black"; 

  fruit = signal('apple');

  constructor(){
    effect(() => {
      if(this.speed() >0 && this.speed() < 80) {
        this.color = 'green'
      }

       if(this.speed() >=80 && this.speed() < 120) {
        this.color = 'orange'
      }

      if(this.speed() >=120){
        this.color = 'red'
      }

      console.log("speed:", this.speed())
    })

    effect(() => {
      console.log(this.fruit());
    })
  }

  increaseSpeed(){
    this.speed.set(this.speed() + 10);
  }

  changefruit(){
    this.fruit.set('banana')
  }

}
