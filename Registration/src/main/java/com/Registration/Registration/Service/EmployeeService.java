package com.Registration.Registration.Service;

import com.Registration.Registration.DTO.EmployeeDTO;

import java.util.List;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);



    List<EmployeeDTO> getallEmployee();

    String updateAllEmployee(EmployeeDTO employeeDTO);

    boolean deleteEmployee(int id);


}
