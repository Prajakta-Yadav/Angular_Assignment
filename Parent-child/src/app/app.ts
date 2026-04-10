import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./child/child";
import { FormsModule } from '@angular/forms';
import { ControlCount } from "./control-count/control-count";
import { DisplayCount } from "./display-count/display-count";

@Component({
  selector: 'app-root',
  imports: [Child, FormsModule, ControlCount, DisplayCount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Parent-child');

 user = signal('Prajakta')
  users = signal(['Prajakta', 'Pooja', 'Arati'])

  newUser = signal('')

  selectUserName = signal('')

  addNewUser(){
    this.users.update((data) =>([...data, this.newUser()]))
    this.newUser.set('')
   
  }

  selectdUser(name: string){
    this.selectUserName.set(name)
  }

  deleteUser(name:string){
    console.log(name);
    this.users.update((data)=> data.filter((item) => item != name))
  }
}
