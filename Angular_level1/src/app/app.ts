

import { Component, signal } from '@angular/core';
//import { ComponentA } from './component-a/component-a';
//import { ComponentB } from './component-b/component-b';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  //standalone: true,
 // imports: [ComponentA, ComponentB],

 imports: [Home,About, Contact],
  //templateUrl: './app.html',
  templateUrl: './Prajakta.html', //custom html file data print in browser
  //template: `<h2> Fork Infosystem <h2>`,  //inline html data print in browser
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly tit
   = signal('angular_level1');
}
