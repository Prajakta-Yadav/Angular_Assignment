

import { Component, signal } from '@angular/core';
//import { ComponentA } from './component-a/component-a';
//import { ComponentB } from './component-b/component-b';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  //standalone: true,
 // imports: [ComponentA, ComponentB],

 imports: [About, Contact],
  //templateUrl: './app.html',
  templateUrl: './Prajakta.html', //custom html file data print in browser
  //template: `<h2> Fork Infosystem <h2>`,  //inline html data print in browser
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('angular_level1');
}