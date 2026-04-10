import { Component, signal } from '@angular/core';
import { Counter } from '../Store/counter';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from '../custom-pipe/trim-text-pipe';
import { CurrencyConvertorPipe } from '../custom-pipe/currency-convertor-pipe';

@Component({
  selector: 'app-control-count',
  imports: [CommonModule,TrimTextPipe, CurrencyConvertorPipe],
  templateUrl: './control-count.html',
  styleUrl: './control-count.css',
})
export class ControlCount {

  constructor(public state:Counter){}


  title = 'hello world'

  name = signal ('') ;

  amount = 10000
  date = "4-10-2026"
  mobile = "samsung"

  today = new Date()


  user = signal({name: 'Praju', age: 23, email: 'praju23@mail.com'})


  printState = 'Using custom Pipes'

  CustomAmount = signal(20); 
}
