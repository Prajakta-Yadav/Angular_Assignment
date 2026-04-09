import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Demo } from "./demo/demo";
import { Attribute } from './attribute/attribute';
import { CustomDirective } from "./custom-directive/custom-directive";
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [Highlight, RouterLink, Demo, CustomDirective, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Directives');
}
