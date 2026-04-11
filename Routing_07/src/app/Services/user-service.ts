import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userList(){
    return[
      {
        id:1, name:'Prajakta', email:"praju23@gmail.com", city:"Pune"
      },
      {
        id:2, name:'Praju', email:"praju783@gmail.com", city:"Mumbai"
      },

      {
        id:3, name:'Teju', email:"Teju88@gmail.com", city:"Delhi"
      },

      {
        id:4, name:'Prachi', email:"prachi76@gmail.com", city:"Sangli"
      },

      {
        id:5, name:'Pratibha', email:"pratibha34@gmail.com", city:"Tasgaon"
      }

    ]
  }
  
}
