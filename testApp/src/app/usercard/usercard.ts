import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  imports: [],
  templateUrl: './usercard.html',
  styleUrl: './usercard.css',
})
export class Usercard {
  @Input() name: string = ''; 
  @Input() age: number =0;
  @Input() city: string = '';
}
