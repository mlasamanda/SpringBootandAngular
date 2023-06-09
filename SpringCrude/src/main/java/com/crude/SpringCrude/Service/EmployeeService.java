package com.crude.SpringCrude.Service;

import com.crude.SpringCrude.EmployeeRepo.EmployeeRepository;
import com.crude.SpringCrude.Entity.Employee;
import com.crude.SpringCrude.Entity.EmployeeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    public Employee saveUser(EmployeeDTO employeeDTO) {
        Employee employee=new Employee(
                employeeDTO.getFname(),
                employeeDTO.getLname(),
                employeeDTO.getEmail(),
                employeeDTO.getPassword(),
                employeeDTO.getSalary(),
                employeeDTO.getMobile()
        );
       return repository.save(employee);

    }


    public Employee fetchUserEmail(String email) {
        return repository.findUserByEmail(email);
    }
}