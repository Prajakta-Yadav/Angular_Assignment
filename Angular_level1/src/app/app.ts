import { Component} from '@angular/core';
import { Statemanage } from "./SmartComponent/statemanage/statemanage";
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  imports: [Statemanage, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
}