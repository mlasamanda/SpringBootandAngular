import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './api.response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  result: Array<Object> | undefined;
 employee:Employee=new Employee()
  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:8085/api/v1/employee/save";
  private url="http://localhost:8085/api/v1/employee/getAllEmployee";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
 
   
 public registerEmployee(employee:Employee):Observable<object> {
    console.log(this.employee)
    return this.http.post<any>(`${this.baseUrl}`,employee);
  }
  getAllEmployee():Observable<any>{
    return this.http.get<ApiResponse>(`${this.url}`);
  }

  getEmployees(){
    return this.http.get<any>(`${this.url}`);
  }
  getEmployeeByID(id:any){
    return this.http.get('http://localhost:8085/api/employee/'+id);
  }

  updateData(id:any,data:any){
    return this.http.put('http://localhost:8085/api/users/updateEmployee'+id, 
    JSON.stringify(data),this.httpOptions);
  }
 
   
}
