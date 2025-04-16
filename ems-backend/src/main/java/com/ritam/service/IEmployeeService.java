package com.ritam.service;

import java.util.List;

import com.ritam.dto.EmployeeDto;

public interface IEmployeeService {
	
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);
	
	List<EmployeeDto> getAllEmployees();
	
	EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee);
	
	void deleteEmployee(Long employeeId);
}
