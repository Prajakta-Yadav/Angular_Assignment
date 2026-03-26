import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [DatePipe]
})


export class App {
  protected readonly title = signal('Assignment_4');

  name:string = "Prajakta";
  city: string = "Pune";

  num1:number =40;
  num2:number =60;

  date = inject(DatePipe);

  CurrentDate = this.date.transform(new Date(), `dd-MMM-yyyy`);

  student = {
    Sname: "Praju",
    Scity: "Tasgaon"
  }

  getMessage(){
   // confirm("Function called...");  
  }

  imageUrl = "https://png.pngtree.com/thumb_back/fh260/background/20240731/pngtree-nice-world-best-for-mobile-hd-wallpapers-pxfuel-image-image_16119738.jpg";

  isDisabled = true;

  username:string = ""; 

  SubmitForm(){
    alert("Submitted form by," + this.username);
  }

 
  Susername:string ="Tolatai";

  message:string = "";

  showMessage(){
    this.message = "Button clicked";
  }

  data:string ="";

  getTyping(event:any){
    this.data = (event.target.value)
  }

  count:number = 0

  incrementCount(){

    this.count++;
  }

  decrementCount(){
    this.count--;
  }

  mouseOver(){
    alert("Mouse over");
  }

  mouseOut(){
    alert("Mouse left");
  }

  fname:string ="";
  Lname:string ="";

  finput:string ="";

  onSubmit(event:Event){
  event.preventDefault();

  this.finput = `Form submitted! By, ${this.fname}`;
   alert(`Form submitted! Name:, ${this.fname}`);

  }

  Ename:string ="";


  Name:string ="";
  Email:string ="";
  note :string ="";

   onApply(event:Event){
    event.preventDefault();
    this.note = "Form Submitted";

  }

  //19

  isChecked: boolean = false;

  //20

  selectedOption: string ='';
}





