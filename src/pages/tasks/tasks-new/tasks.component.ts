import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../../../classes/tasks';
import { TaskService } from '../../../providers/task/task.service';

@Component({  //decorator
  selector: 'tasks-new',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksNewComponent implements OnInit {

  title = 'Tarefas';
  
  task:Tasks={
    name:"Tx",
    value:10
  };

  tasks:Array<Tasks> = [];

  constructor(private taskService:TaskService) {
      this.tasks = this.taskService.tasks;
   }

  ngOnInit() {    
  } 

  addLista(){
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

}
