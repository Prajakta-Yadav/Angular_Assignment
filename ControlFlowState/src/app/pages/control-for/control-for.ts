import { CommonModule } from '@angular/common';
import { Component, isWritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-control-for',
  imports: [CommonModule],
  templateUrl: './control-for.html',
  styleUrl: './control-for.css',
})
export class ControlFor {
  users = signal(['Prajakta', 'Teju', 'Dipti']);


  usersDetails = signal([
    {id:1, name: 'Prajakta', surname:'Yadav', email: 'praju@23gmail.com'},
    {id:2, name: 'Praju', surname:'Jadhav', email: 'prajujadhav@23gmail.com'},
    {id:1, name: 'Prajakta', surname:'Yadav', email: 'praju@23gmail.com'},
    {id:2, name: 'Praju', surname:'Jadhav', email: 'prajujadhav@23gmail.com'},
    {id:1, name: 'Prajakta', surname:'Yadav', email: 'praju@23gmail.com'},
    {id:2, name: 'Praju', surname:'Jadhav', email: 'prajujadhav@23gmail.com'},
    
  ])

}
