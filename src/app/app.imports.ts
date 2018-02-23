//PROVIDERS
import { TaskService } from '../providers/task/task.service'
import { CepService } from '../providers/cep/cep.service'

//NATIVE PROVIDERS

//MODULES
import { GridModule } from '../modules/jqwidgets/grid.module';

//NATIVE MODULES
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';

//DECLARATIONS
import { FormatCurrencyPipe } from '../declarations/pipes/format-currency.pipe';
import { FormatDatePipe } from '../declarations/pipes/format-date.pipe';
import { TasksListComponent } from '../pages/tasks/tasks-list/tasks.component';
import { TasksNewComponent } from '../pages/tasks/tasks-new/tasks.component';
import { CepComponent } from '../pages/cep/cep.component';
import { MyTaskDirective } from '../declarations/directives/my-task.directive';

//Components
import { jqxBarGaugeComponent } from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';

export const PROVIDERS = [
    TaskService,
    CepService
]

export const NATIVEPROVIDERS = [
//    Validators,
//    FormControl
]

export const MODULES = [
 //   CepComponentModule
    GridModule
]

export const NATIVEMODULES = [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
]

export const DECLARATIONS = [
    FormatCurrencyPipe,
    FormatDatePipe,
    TasksListComponent,
    TasksNewComponent,
    MyTaskDirective,
    CepComponent
]

export const COMPONENTS = [
    jqxBarGaugeComponent
]