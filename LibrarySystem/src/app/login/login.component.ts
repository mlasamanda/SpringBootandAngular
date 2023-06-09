import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee:Employee=new Employee();
constructor(private service:EmployeeService,private router:Router){
}
ngOnInit(): void {
    
}
/*loginForm(){
  console.log(this.employee);
  this.service.loginEmployee(this.employee).subscribe(
  data=>{console.log("successfull response");
this.router.navigate(['/'])
}
  ,
    error=>console.log("Exception Occur")
  )
}*/
}
