import { Component, inject } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';
import { Appointment } from '../../Services/appointment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  patientId : number = 0; 

  appointSev = inject(Appointment)

  citylist: string[] = ["Pune", "Mumbai", "Nagpur"];  //plain normal Array of data

  citylist$ = of(["Pune", "Mumbai", "Nagpur"]);     //observable Array of data  use of() operator emit All data once

  cityList2$ = from(["Pune", "Mumbai", "Nagpur"]);   //observable array provide one by one value use from()  operator emit All data one by one


constructor(){
  this.appointSev.$role.subscribe((res:string) =>{

    debugger;
  })

  this.appointSev.$roleSub.subscribe((res:string) =>{
    debugger; 
  })
}

getUser(){

  this.appointSev.getPatientById(this.patientId)?.subscribe((res:any) =>{
    debugger;
    
  })
}


 /* myInterval$ = interval(1000);
  timer$ = timer(5000);


  constructor(){

    this.timer$.subscribe(res =>{
      console.log("Timer Executed")
    })

    this.myInterval$.subscribe((res:number) =>{
      console.log("Interval" + res)
    })
    
    this.citylist$.subscribe((cityData:string[])=>{
      debugger;
      console.log(cityData)
    })

    this.cityList2$.subscribe((res:string) =>{           //get data one by one
      debugger;
    })

    const myObs$ = new Observable(value => {
    value.next("This is Demo Text")
  
  });

  myObs$.subscribe(message =>{
    debugger;
    console.log(message)
  })

  }
*/

}
