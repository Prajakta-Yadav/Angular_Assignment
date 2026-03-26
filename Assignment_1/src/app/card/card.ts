import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
   @Input() title: string = '';
   @Input() description:string = '';

   @Output() buttonClick = new EventEmitter<string>();

  onButtonclick(){
    this.buttonClick.emit(this.title);
  }
  }
