import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../providers/classes/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  title = 'Tarefas';
  tasks=[];
  task:Tasks={
    name:"",
    value:0
  };

  constructor() { }

  ngOnInit() {    
  } 

  addLista(){
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

}
