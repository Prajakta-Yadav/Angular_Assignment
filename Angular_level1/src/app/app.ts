

import { Component } from '@angular/core';
import { ComponentA } from './component-a/component-a';
import { ComponentB } from './component-b/component-b';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentA, ComponentB],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
