package com.crude.SpringCrude.Controller;

import com.crude.SpringCrude.Entity.Employee;
import com.crude.SpringCrude.Entity.EmployeeDTO;
import com.crude.SpringCrude.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/employee")
@CrossOrigin(origins = "http://localhost:4200/")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping(path = "/register")
     public Employee registerForm(@RequestBody  EmployeeDTO employeeDTO) throws Exception {
        Employee employee1=null;
        String email=employeeDTO.getEmail();
        if(email!=null && !"".equals(email)){
            employee1=employeeService.fetchUserEmail(email);
            if (employee1!=null){
                throw new Exception("user email "+email+" is exist");
            }
        }
        employee1=employeeService.saveUser(employeeDTO);
        return employee1;
    }

}
