import { Component } from '@angular/core';
import { Tasks } from '../classes/tasks';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<Tasks> = [
    { name: "Teste", value: 0 }
  ];
}
