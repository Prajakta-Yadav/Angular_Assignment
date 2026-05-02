import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Appointment } from '../../Services/appointment';

@Component({
  selector: 'app-sub-beh-replay',
  imports: [],
  templateUrl: './sub-beh-replay.html',
  styleUrl: './sub-beh-replay.css',
})
export class SubBehReplay  implements OnInit{

  studentName$ = new Subject();
  rollNO$ = new Subject<number>();   //we declare subject with datatype which value type its store. 

  takeTill = new Subject<void>();  // no return value

  $courseName: Subject<string> = new Subject<string>(); 

  // initSubject = new Subject("ABC");   //Error we cannot set default value in subject. but in behaviourSubject we Define Default value. 

  appointServe = inject(Appointment)
  
  constructor(){
    setTimeout(() =>{
      this.studentName$.next("Angular 20");    //emit value after 4 second
      this.rollNO$.next(123); 
      this.takeTill.next();
      this.appointServe.$courseDuration.next("3 month + 1 week"); 

    }, 4000);
  }


  ngOnInit(): void {

      this.appointServe.$courseDuration.subscribe((Res:any) => {
        debugger;
      })
      this.studentName$.subscribe((res:any) => {
        debugger; 
      })

      this.rollNO$.subscribe((res:any) => {
        debugger; 
      })
  }
  
  onRoleChange(event: any){
    debugger;
    this.appointServe.$role.next(event.target.value)
    this.appointServe.$roleSub.next(event.target.value)
  }
  

}
