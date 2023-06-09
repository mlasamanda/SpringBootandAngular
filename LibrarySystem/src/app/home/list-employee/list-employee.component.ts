import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/service/api.response';
import { EmployeeService } from 'src/app/service/employee.service';
import { TemplateComponent } from 'src/app/template/template.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit{
   employees!:any;
  constructor(private service:EmployeeService,private router:Router){}
  ngOnInit(): void {
      this.service.getEmployees()
     .subscribe(response => {
       this.employees = response;
     });
  }
 
}

