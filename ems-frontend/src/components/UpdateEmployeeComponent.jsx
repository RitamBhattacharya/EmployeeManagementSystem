import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { toast } from 'react-toastify';

const UpdateEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getEmployeeById(id)
            .then(response => {
                const employee = response.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmail(employee.email);
            })
            .catch(error => {
                console.error("Error fetching employee data:", error);
            });
    }, [id]);

    const validate = () => {
        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = 'Please enter First Name';
        if (!lastName.trim()) newErrors.lastName = 'Please enter Last Name';
        if (!email.trim()) {
            newErrors.email = 'Please enter Email';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid Email';
        }
        return newErrors;
    };

    const saveEmployee = (e) => {
        e.preventDefault();

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const employee = { firstName, lastName, email };

        updateEmployee(id, employee)
            .then(response => {
                console.log("Employee updated:", response.data);
                navigate('/employees');
                toast.success("Employee updated successfully!");

            })
            .catch(error => {
                console.error("Error updating employee:", error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header text-white text-center fw-bold fs-5" style={{
                            background: "linear-gradient(to right, #0d6efd, #6610f2)"
                        }}>
                            Update Employee
                        </div>
                        <div className="card-body p-4">
                            <form>
                                <div className="form-group mb-3">
                                    <label>First Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                            setErrors({ ...errors, firstName: '' });
                                        }}
                                    />
                                    {errors.firstName && (
                                        <div className="text-danger mt-1">{errors.firstName}</div>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                            setErrors({ ...errors, lastName: '' });
                                        }}
                                    />
                                    {errors.lastName && (
                                        <div className="text-danger mt-1">{errors.lastName}</div>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrors({ ...errors, email: '' });
                                        }}
                                    />
                                    {errors.email && (
                                        <div className="text-danger mt-1">{errors.email}</div>
                                    )}
                                </div>
                                <button className="btn btn-success w-100" onClick={saveEmployee}>
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployeeComponent;
