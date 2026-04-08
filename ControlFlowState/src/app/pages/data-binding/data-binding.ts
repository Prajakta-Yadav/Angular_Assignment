import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  name = signal('Prajakta'); 

  age = 20;

  userData = signal({
    name: 'Prajakta',
    age: 23,
    email: 'praju23@gmail.com'
  })

  updateUserData(key:string, val:string){
    this.userData.update((item) => ({...item, [key]:val}))
  }

  empName = signal('Yadav');

  get eName(){
    return this.empName();

  }
  
  set eName(val:string){
    this.empName.set(val)
  }

 empData = signal({
  
   cmpName: 'kpit tech',
   email: 'kpitA23gmail.com'

 })

 get EmpComp(){
  return this.empData().cmpName
 }

 set EmpComp(val:string){
  this.empData.update((item) => ({...item, cmpName:val}))
 }


}
