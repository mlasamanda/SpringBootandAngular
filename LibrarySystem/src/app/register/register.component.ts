import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
employee:Employee=new Employee();
  constructor(private service:EmployeeService,private router:Router){}
  ngOnInit(): void {}
  //regsitration
  registerForm(){
console.log(this.employee); 
  this.service.registerEmployee(this.employee).subscribe(
    resultdata=>console.log(resultdata),
    error=>console.log(error));
    this.employee=new Employee();
   this.router.navigate(['/admin']);
  }
}
  

  


