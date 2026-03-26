import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-lifecycle',
  imports: [Card],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnInit, OnChanges, OnDestroy{

  constructor(){
    alert("I am Constructor from lifecycle");
     console.log("Constructor call..");
  }

  ngOnChanges(){
    alert("I am OnChanges from lifecycle");
    console.log("onchanges call..");
  }

  ngOnInit(){
      alert("I am onInit from lifecycle");
       console.log("OnInit call..");
  }
  
  ngOnDestroy(){
      confirm("Lifecycle called OnDestroy..");
       console.log("onDestroy call..");

  }

  handleClick(title: string) {
  alert(title + " button clicked");
}

}
