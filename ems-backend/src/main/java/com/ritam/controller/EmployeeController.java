package com.ritam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ritam.dto.EmployeeDto;
import com.ritam.service.IEmployeeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
	
	@Autowired
	private IEmployeeService employeeService;
	
	//Build Add Employee REST API
	@PostMapping("/addEmployee")
	public ResponseEntity<EmployeeDto> addEmployee(@RequestBody EmployeeDto employeeDto){
		EmployeeDto savedEmployee=employeeService.createEmployee(employeeDto);
		return new ResponseEntity<>(savedEmployee,HttpStatus.CREATED);
	}
	
	//Build Get Employee by ID REST API
	@GetMapping("/getEmployee/{id}")
	public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable Long id){
		EmployeeDto employeeDto=employeeService.getEmployeeById(id);
		return new ResponseEntity<>(employeeDto,HttpStatus.OK);
	}
	
	
	//Build Get Employee by ID REST API
	@GetMapping("/getEmployees")
	public ResponseEntity<List<EmployeeDto>> getEmployees(){
		return new ResponseEntity<> (employeeService.getAllEmployees(),HttpStatus.OK);
	}
	
	
	//Build Update Employee by ID REST API
	@PutMapping("/updateEmployee/{id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable Long id,@RequestBody EmployeeDto updatedEmployee){
		EmployeeDto updatedEmployeeDto=employeeService.updateEmployee(id, updatedEmployee);
		return new ResponseEntity<>(updatedEmployeeDto,HttpStatus.OK);
	}
	
	

	//Build Delete Employee by ID REST API
	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
		employeeService.deleteEmployee(id);
		return ResponseEntity.ok("Employee with id:"+id+" deleted successfully !!!");
	}
}
