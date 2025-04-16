// EmployeeService.js
import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees/';

export const listEmployees = () => axios.get(REST_API_BASE_URL + "getEmployees");

export const addEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL + "addEmployee", employee);
};

export const getEmployeeById = (id) => {
    return axios.get(REST_API_BASE_URL + "getEmployee/" + id);
};

export const updateEmployee = (id, employee) => {
    return axios.put(REST_API_BASE_URL + "updateEmployee/" + id, employee);
};

export const deleteEmployee = (id) => {
    return axios.delete(REST_API_BASE_URL+`deleteEmployee/${id}`);
};
