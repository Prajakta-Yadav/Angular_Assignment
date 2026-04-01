import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
  standalone: true
})
export class Hightlight {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'Yellow';
    this.el.nativeElement.style.color = 'blue';
   }

}
