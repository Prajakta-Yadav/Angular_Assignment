import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
  standalone: true,
  providers:[DatePipe],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,   
})

export class Student {
  name:string = 'Fork Infosystem';
  marks:number = 78;
  
  //constructor(private date: DatePipe){}

  date = inject(DatePipe);

  showMessage(){
    alert("Show alert Message"); 
    //this.marks++;
  }

  transformedDate = this.date.transform(new Date(), `dd-MMM-yyyy`);
}
