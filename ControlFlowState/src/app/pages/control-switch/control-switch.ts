import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-switch',
  imports: [],
  templateUrl: './control-switch.html',
  styleUrl: './control-switch.css',
})
export class ControlSwitch {

  status = signal("notStarted")

  handleSwitch(event:Event){

    const target = event.target as HTMLSelectElement
    this.status.set(target.value)
  }

}
