import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-get-set',
  imports: [],
  templateUrl: './get-set.html',
  styleUrl: './get-set.css',
})
export class GetSet {
  name: WritableSignal <string> = signal('')

  resetValue(){
    this.name.set("Prajakta");
   
  }

  setValue(val:string){
    this.name.set(val)
  }
}
