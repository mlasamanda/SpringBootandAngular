import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home/home.component';
import { ListEmployeeComponent } from './home/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './home/create-employee/create-employee.component';
import { TemplateComponent } from './template/template.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSiderbarComponent } from './main-siderbar/main-siderbar.component';
import { ContentComponent } from './content/content.component';
import { ControlSiderComponent } from './control-sider/control-sider.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { EditEmployeeComponent } from './home/edit-employee/edit-employee.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    TemplateComponent,
    MainHeaderComponent,
    MainSiderbarComponent,
    ContentComponent,
    ControlSiderComponent,
    MainFooterComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
ReactiveFormsModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 