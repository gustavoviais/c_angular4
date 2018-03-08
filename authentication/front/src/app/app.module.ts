import { PROVIDERS, NATIVEPROVIDERS, MODULES, NATIVEMODULES, DECLARATIONS } from "./app.imports"
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,    
    DECLARATIONS, ProductsListComponent
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
