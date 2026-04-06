import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
  standalone: true
})
export class Hightlight {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'Yellow';
    this.el.nativeElement.style.color = 'blue';
   }

    @HostListener('mouseenter')
    onMouseEnter(){

      this.el.nativeElement.style.color = 'red';
    }

    
    @HostListener('mouseleave')
     onMouseLeave(){
      this.el.nativeElement.style.color = 'black';
     }

}
