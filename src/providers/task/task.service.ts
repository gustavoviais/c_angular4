import { Injectable } from '@angular/core';
import { Tasks } from '../../classes/tasks'

@Injectable()
export class TaskService {

  tasks:Array<Tasks> = [];
  
  constructor() { }
  
}
