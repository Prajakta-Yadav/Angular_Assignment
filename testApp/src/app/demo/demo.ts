import { Component } from '@angular/core';
import { Home } from '../home/home';
import { About } from '../about/about';

@Component({
  selector: 'app-demo',
  imports: [Home, About],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {

}
