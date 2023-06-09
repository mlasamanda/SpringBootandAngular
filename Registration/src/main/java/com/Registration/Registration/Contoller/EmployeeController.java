package com.Registration.Registration.Contoller;
import com.Registration.Registration.DTO.EmployeeDTO;
import com.Registration.Registration.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
 @CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/v1/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping(path = "/save")
    public String saveEmp(@RequestBody EmployeeDTO employeeDTO){

        String id=employeeService.addEmployee(employeeDTO);
        return  id;
    }
    @GetMapping(path = "/getAllEmployee")
    public List<EmployeeDTO> getEmployee(){
        List<EmployeeDTO> employeeDTOList=employeeService.getallEmployee();
        return employeeDTOList;
    }
     @PutMapping(path = "/updateEmployee")
    public  String updateEmployee(@RequestBody EmployeeDTO employeeDTO){
        return employeeService.updateAllEmployee(employeeDTO);
     }
     @DeleteMapping(path = " ")
    public String deleteEmployee(@PathVariable(value="id")int id){
        boolean delete =employeeService.deleteEmployee(id);
        return "Employee Deleted";
     }
}
