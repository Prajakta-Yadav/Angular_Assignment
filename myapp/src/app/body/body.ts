import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Content } from '../content/content';

@Component({
  selector: 'app-body',
  imports: [Sidebar,Content],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
