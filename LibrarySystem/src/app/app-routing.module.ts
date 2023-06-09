import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
 import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home/home.component';
import { ListEmployeeComponent } from './home/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './home/create-employee/create-employee.component';
import { EditEmployeeComponent } from './home/edit-employee/edit-employee.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"home",component:HomeComponent},
    {path:"list",component:ListEmployeeComponent},
    {path:"create",component:CreateEmployeeComponent},
    {path:"edit/:id",component:EditEmployeeComponent},
    { path:"admin",component:TemplateComponent}
     
]
@NgModule({

  imports: [CommonModule,RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,RegisterComponent ]