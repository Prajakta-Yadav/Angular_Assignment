import { Component, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-define-signal',
  imports: [FormsModule],
  templateUrl: './define-signal.html',
  styleUrl: './define-signal.css',
})
export class DefineSignal {

  data = 10;
  count = signal(0);

  constructor(){

     console.log("this is data", this.data); //this is not update value in console. only UI update

    effect(() =>{

       //console.log("this is data", this.data);  //this is update UI plus Console value
     
      console.log("this is count", this.count());
      if(this.count() == 10){
        this.count.set(0)
      }
    })
  }


  increase(){
    this.data = this.data + 10;
    this.count.update((val) => val +1);

  }

  username: string = ''; 
  users: WritableSignal<string[]> = signal(['Praju', "Teju", 'Nandini'])

  Adddata(){
    this.users.update((item) => [...item, this.username ])
    console.log(this.users()); 
    this.username = ''; 
  }

}
