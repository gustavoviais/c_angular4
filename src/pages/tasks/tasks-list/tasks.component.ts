import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../../../classes/tasks';
import { TaskService } from '../../../providers/task/task.service';

@Component({  //decorator
  selector: 'tasks-list',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksListComponent implements OnInit {
  tasks:Array<Tasks> = [];

  constructor(private taskService:TaskService) {
      /*this.taskService.tasks.push({
        name: "T1",
        value: 7
      });*/

      this.tasks = this.taskService.tasks;
   }

  ngOnInit() {    
  } 

}
