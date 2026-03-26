import { Component, signal } from '@angular/core';

import { Usercard } from './usercard/usercard';
import { Demo } from './demo/demo';
import { Home } from './home/home';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [Usercard, Demo,Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testApp');

      

}
