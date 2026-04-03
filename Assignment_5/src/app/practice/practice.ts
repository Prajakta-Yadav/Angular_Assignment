import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hightlight } from '../hightlight';


@Component({
  selector: 'app-practice',
  imports: [FormsModule, CommonModule],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {

isDark: boolean = true;

toggleMe(){
  this.isDark = !this.isDark;
}
}
