import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// { Home } from './pages/home/home';
//import { About } from './pages/about/about';
//import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  //imports: [Home,About,Contact],

  imports: [RouterOutlet, RouterLink],
  templateUrl: './Prajakta.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Session-01');
}
