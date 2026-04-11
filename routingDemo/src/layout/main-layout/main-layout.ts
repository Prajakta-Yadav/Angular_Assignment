import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

  constructor(public route:Router){}

  userData = signal({name: 'Praju', age: 23, id: 1})

  gotoProfile(){

    this.route.navigate(['employee'], {
      queryParams:{
        id:10, name: 'peter',
        age: 40
      }
    })

  }

  gotoStudent(){
    this.route.navigate(['student-layout', 'Peter', '22'])

  }

}
