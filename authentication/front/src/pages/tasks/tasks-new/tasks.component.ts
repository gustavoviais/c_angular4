import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../../../classes/tasks';
import { TaskService } from '../../../providers/task/task.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';             // Add this

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

  constructor(private taskService:TaskService, private route: ActivatedRoute, private router: Router) {
      this.tasks = this.taskService.tasks;
   }

  ngOnInit() {    
  } 

  addLista(){
    //this.router.navigate(['/tasks']);
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

}
