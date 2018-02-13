import { PROVIDERS, NATIVEPROVIDERS, MODULES, NATIVEMODULES } from "./app.imports"
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    MODULES, 
    NATIVEMODULES    
  ],
  providers: [
    PROVIDERS, 
    NATIVEPROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
