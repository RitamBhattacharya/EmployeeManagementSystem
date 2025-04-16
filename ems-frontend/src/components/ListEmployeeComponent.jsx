import React, { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }, []);

  const goToAddEmployee = () => navigate('/add-employee');
  const goToHome = () => navigate('/');
  const updateEmployee = (id) => navigate('/edit-employee/' + id);
  const deleteEmployee = (id) => navigate('/delete-employee/' + id);

  return (
    <div className="container mt-5">
      <div className="card shadow rounded-4 border-0">
        <div
          className="card-header bg-gradient text-white d-flex justify-content-between align-items-center rounded-top-4"
          style={{ background: '#0d6efd' }}
        >
          <h4 className="mb-0 fw-bold">Employees Directory</h4>
          <div>
            <button
              className="btn btn-light fw-semibold px-4 shadow-sm me-2"
              onClick={goToHome}
            >
              🏠 Home
            </button>
            <button
              className="btn btn-light fw-semibold px-4 shadow-sm"
              onClick={goToAddEmployee}
            >
              + Add Employee
            </button>
          </div>
        </div>

        <div className="card-body p-4">
          {employees.length === 0 ? (
            <div className="text-center text-muted">No employees found.</div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle shadow-sm">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-outline-primary me-2 px-3"
                          onClick={() => updateEmployee(employee.id)}
                        >
                          <i className="bi bi-pencil-square me-1"></i>Update
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger px-3"
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          <i className="bi bi-trash me-1"></i>Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
