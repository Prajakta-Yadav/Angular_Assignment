import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeForm } from "./practice-form/practice-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PracticeForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Template-08');
}
