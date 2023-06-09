import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent  implements OnInit{
  employee:Employee=new Employee();
  submitted=false;
  constructor(private service:EmployeeService,private router:Router){}
  ngOnInit(): void {}
  //regsitration
  createForm(){
    this.submitted=true;
console.log(this.employee); 
  this.service.registerEmployee(this.employee).subscribe(
  resultdata=>console.log(resultdata),
  error=>console.log(error));
  this.employee=new Employee();
 this.router.navigate(['/home']);
}
}
