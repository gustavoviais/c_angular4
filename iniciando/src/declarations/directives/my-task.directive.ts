import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Tasks } from '../../classes/tasks';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask:Tasks;

  constructor(private el:ElementRef) { 
    //this.el.nativeElement.innerHTML += "Conteúdo";
  }

  get myTask(){
    return this._myTask;
  }

  @Input()
  set myTask(value:Tasks){
    this._myTask = value;
    this.changeColorTask();
  }

  @HostListener('click')
  onclick(){
    alert(this._myTask);
  }

  changeColorTask(){
    this.el.nativeElement.style.color = this._myTask.value > 5 ? 'green' : 'red';
    //this.el.nativeElement.style.color ='green';
  }

}
