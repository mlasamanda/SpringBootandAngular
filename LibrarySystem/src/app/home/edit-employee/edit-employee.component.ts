import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id:any;
  data:any;
  employee = new Employee();
submitted: any;
  
  constructor(private route:ActivatedRoute, private dataService: EmployeeService){}

  ngOnInit(){
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData(){
    this.dataService.getEmployeeByID(this.id).subscribe(res => {
      this.data = res;
      this.employee  = this.data;
    });
  }

  updateEmployee(){
    this.dataService.updateData(this.id,this.employee).subscribe(res => {
      
    })
  }
}