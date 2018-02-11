import { PROVIDERS, NATIVEPROVIDERS, MODULES, NATIVEMODULES } from "./app.imports"
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
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
