import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-if',
  imports: [],
  templateUrl: './control-if.html',
  styleUrl: './control-if.css',
})
export class ControlIf {

  isLogin = signal(false);

  show = signal(true);

  status = signal('No Status')

  handleLogin(status:boolean){
    this.isLogin.set(status)
  }

  handleStatus(event:Event){
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value); 
  }

}
