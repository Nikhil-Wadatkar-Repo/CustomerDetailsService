package com.jpmc.service;

import com.jpmc.bean.Employee;
import com.jpmc.dao.EmpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpService {
    @Autowired
    private EmpRepo employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Integer id) {
        return employeeRepository.findById(id);
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Integer id) {
        employeeRepository.deleteById(id);
    }

    public Employee updateEmployee(Integer id, Employee updatedEmployee) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        if (employee != null) {
            employee.setEmpName(updatedEmployee.getEmpName());
            employee.setEmail(updatedEmployee.getEmail());
            employee.setContact(updatedEmployee.getContact());
            return employeeRepository.save(employee);
        }
        return null;
    }
}
