package com.Registration.Registration.Service;
import com.Registration.Registration.DTO.EmployeeDTO;
import com.Registration.Registration.Entity.Employee;
import com.Registration.Registration.Repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceIMPL implements EmployeeService{
    @Autowired
    private EmployeeRepo employeeRepo;
    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {
        Employee employee;
        employee = new Employee(
                employeeDTO.getFname(),
                employeeDTO.getLname(),
                employeeDTO.getEmail(),
                employeeDTO.getPassword(),
                employeeDTO.getSalary(),
                employeeDTO.getMobile()
        );
        employeeRepo.save(employee);
        return employee.getFname();
    }

    @Override
    public List<EmployeeDTO> getallEmployee() {
        List<Employee> employeeList=employeeRepo.findAll();
        List<EmployeeDTO> employeeDTOList=new ArrayList<>();
        for(Employee e:employeeList){
            EmployeeDTO employeeDTO=new EmployeeDTO(
                  e.getId(),
                  e.getFname(),
                  e.getLname(),
                  e.getEmail(),
                  e.getPassword(),
                  e.getSalary(),
                  e.getMobile()
            );
            employeeDTOList.add(employeeDTO);
        }
        return employeeDTOList;
    }

    @Override
    public String updateAllEmployee(EmployeeDTO employeeDTO) {
        if(employeeRepo.existsById(employeeDTO.getId())) {
        Employee employee=employeeRepo.getById(employeeDTO.getId());
        employee.setFname(employeeDTO.getFname());
            employee.setLname(employeeDTO.getLname());
        employee.setEmail(employeeDTO.getEmail());
        employee.setSalary(employeeDTO.getSalary());
        employee.setMobile(employeeDTO.getMobile());
        employeeRepo.save(employee);
        }
        else{
            System.out.println("Employee is not exist");
        }
        return null;
    }

    @Override
    public boolean deleteEmployee(int id) {
        if(employeeRepo.existsById(id)){
            employeeRepo.deleteById(id);
        }
        else{
            System.out.println("Employee is not exist");
        }
        return true;
    }


}
