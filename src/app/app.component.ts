import { Component } from '@angular/core';
import { Tasks } from '../classes/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks:Array<Tasks> = [
    { name: "Teste", value:0 }
  ];
}
