import { Routes } from "@angular/router";
import { TasksListComponent } from "../pages/tasks/tasks-list/tasks.component";
import { TasksNewComponent } from "../pages/tasks/tasks-new/tasks.component";
import { CepComponent } from "../pages/cep/cep.component";
import { GridComponent } from "../pages/jqwidgets/grid.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsListComponent } from "./components/products/products-list/products-list.component";
import { AuthGuardRouterService } from "./services/auth/auth-guard-router.service";
import { LogoutComponent } from "./components/logout/logout.component";

export const appRoutes:Routes = [
    { path: 'tasks', component: TasksListComponent },
    { path: 'tasks/new', component: TasksNewComponent },
    { path: 'cep', component: CepComponent },
    { path: 'grid', component: GridComponent },
    { path: 'products/list', component: ProductsListComponent, canActivate:[AuthGuardRouterService] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardRouterService] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];