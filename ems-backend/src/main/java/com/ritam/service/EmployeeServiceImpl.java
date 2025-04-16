package com.ritam.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ritam.dto.EmployeeDto;
import com.ritam.entity.Employee;
import com.ritam.exception.ResourceNotFoundException;
import com.ritam.mapper.EmployeeMapper;
import com.ritam.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
	
	@Autowired
	private EmployeeRepository repository;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee=repository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}
	
	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee=repository.findById(employeeId)
		.orElseThrow(() -> new ResourceNotFoundException("Employee does not exists with the given id:"+ employeeId));
		
		return EmployeeMapper.mapToEmployeeDto(employee);
	}
	
	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees = repository.findAll();
		
//		List<EmployeeDto> employeeDtos=new ArrayList<>();
//		
//		for(Employee emp:employees) {
//			employeeDtos.add(EmployeeMapper.mapToEmployeeDto(emp));
//		}
//		
//		return employeeDtos;
		
		return employees.stream().map(employee -> EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
	}
	
	
	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
		Employee employee=repository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee does not exists with the given id:"+ employeeId));
		
		employee.setFirstName(updatedEmployee.getFirstName());
		employee.setLastName(updatedEmployee.getLastName());
		employee.setEmail(updatedEmployee.getEmail());
		
		Employee savedEmployee = repository.save(employee);

		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}
	
	
	@Override
	public void deleteEmployee(Long employeeId) {
		Employee employee=repository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee does not exists with the given id:"+ employeeId));
		repository.delete(employee);
	}
}
