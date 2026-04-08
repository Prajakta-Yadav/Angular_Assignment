import { Component, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todi-list',
  imports: [FormsModule],
  templateUrl: './todi-list.html',
  styleUrl: './todi-list.css',
})
export class TodiList {

  tasks = signal([
    {Id:1, title: 'Team lunch', priority:'high', status: 'pending'}
  ]);

  title = signal('');
  priority = signal('high');
  status = signal('pending')

  addTask(){
    this.tasks.update((item) =>(
      [...item,{Id:this.tasks().length, title: this.title() , priority: 'high' , status:'pending'}]
    ))

    this.title.set('');

  }

  deleteTask(Id:number){
    this.tasks.update((tasks) => tasks.filter((task) => task.Id != Id))
  }

  handlePriority(event:Event){
    let target = event.target as HTMLSelectElement;
    this.priority.set(target.value); 
  }

  handleStatus(event:Event){
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value); 
  }
} 
