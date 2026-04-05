import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students:any [] = [];

  editindex: number = -1;

  student = {
    name: '',
    email: '',
    course: ''
  } 

  onSubmit(form:any){

    if(this.editindex === -1){
      this.students.push(form.value);
    }
    else{
      this.students[this.editindex] = form.value;
      this.editindex = -1
    }
    form.reset();
  }


  editStudent( student:any, index:number){
    this.student = {...student},
    this.editindex = index;

  }

  deleteStudents(index:number){
    this.students.splice(index,1);
  }
}
