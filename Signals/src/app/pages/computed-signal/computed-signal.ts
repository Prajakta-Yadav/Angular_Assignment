import { Component, computed, effect, signal, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
})
export class ComputedSignal {

  height = signal(100);
  width = signal(20);

  area = computed(() => this.height() * this.width());

  handleheight(){
    this.height.set(this.height() + 10)
  }

  constructor(){
    effect(() => {
      console.log("area is :", this.area());
    })
  }

}
