import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DynamicComponent');

  @ViewChild("container", {read:ViewContainerRef})
  container: ViewContainerRef | undefined

  async LoadUserDetails(){

    this.container?.clear()

    const {UserDetails} = await import('../user-details/user-details')
    this.container?.createComponent(UserDetails)


  }
}
