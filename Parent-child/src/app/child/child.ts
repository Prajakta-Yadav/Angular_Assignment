import { Component, EventEmitter, Input, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Input() userName :string |undefined

  @Output() seletedUser = new EventEmitter()
  @Output() deleteUser = new EventEmitter()


  whichUser(name:string | undefined){
    this.seletedUser.emit(name)
  }

  delete(name:any){
    this.deleteUser.emit(name)
  }

}
