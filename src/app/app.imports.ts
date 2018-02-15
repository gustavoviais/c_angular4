//PROVIDERS


//NATIVE PROVIDERS

//MODULES

//NATIVE MODULES
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';   

//DECLARATIONS
import { FormatCurrencyPipe } from '../declarations/pipes/format-currency.pipe';
import { FormatDatePipe } from '../declarations/pipes/format-date.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { MyTaskDirective } from '../declarations/directives/my-task.directive';

export const PROVIDERS = [
    
]

export const NATIVEPROVIDERS = [
    
]

export const MODULES = [
    
]

export const NATIVEMODULES = [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
]

export const DECLARATIONS = [
    FormatCurrencyPipe,
    FormatDatePipe,
    TasksComponent,
    MyTaskDirective
]