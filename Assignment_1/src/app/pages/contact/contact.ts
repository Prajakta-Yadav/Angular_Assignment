import { Component } from '@angular/core';
import { User } from '../user/user';
import { Card } from '../card/card';

@Component({
  selector: 'app-contact',
  imports: [User, Card],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

   name:string = "Prajakta";

    getUserData(){
      this.name = this.name;
      alert('welcome '+ this.name);
    }
}
