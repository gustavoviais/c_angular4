//PROVIDERS
import { TaskService } from '../providers/task/task.service'
import { CepService } from '../providers/cep/cep.service'

//NATIVE PROVIDERS
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//MODULES
import { GridModule } from '../modules/jqwidgets/grid.module';

//NATIVE MODULES
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//DECLARATIONS
import { FormatCurrencyPipe } from '../declarations/pipes/format-currency.pipe';
import { FormatDatePipe } from '../declarations/pipes/format-date.pipe';
import { TasksListComponent } from '../pages/tasks/tasks-list/tasks.component';
import { TasksNewComponent } from '../pages/tasks/tasks-new/tasks.component';
import { CepComponent } from '../pages/cep/cep.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { GridComponent } from '../pages/jqwidgets/grid.component';
import { MyTaskDirective } from '../declarations/directives/my-task.directive';
import {AppComponent} from './app.component';

//Components
//import { jqxBarGaugeComponent } from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';

//MATERIAL
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CdkTableModule} from '@angular/cdk/table';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  } from '@angular/material';


const appRoutes:Routes = [
    { path: 'tasks', component: TasksListComponent },
    { path: 'tasks/new', component: TasksNewComponent },
    { path: 'cep', component: CepComponent },
    { path: 'grid', component: GridComponent }
];

export const PROVIDERS = [
    TaskService,
    CepService
]

export const NATIVEPROVIDERS = [
    { provide: LocationStrategy, useClass: HashLocationStrategy }    
]

export const MODULES = [
 //   CepComponentModule
    GridModule,
    RouterModule.forRoot(appRoutes),
    
]

export const NATIVEMODULES = [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    CdkTableModule,
    
]

export const DECLARATIONS = [
    FormatCurrencyPipe,
    FormatDatePipe,
    TasksListComponent,
    TasksNewComponent,
    MyTaskDirective,
    CepComponent,
    MenuComponent,
    GridComponent
]

export const COMPONENTS = [
    AppComponent    
]