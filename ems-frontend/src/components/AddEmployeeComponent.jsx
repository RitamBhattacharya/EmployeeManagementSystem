import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../services/EmployeeService';
import { toast } from 'react-toastify';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

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

        addEmployee(employee).then((response) => {
            console.log("Employee added successfully:", response.data);
            navigate('/employees');
            toast.success("Employee added successfully!");
        }).catch((error) => {
            console.error("There was an error adding the employee!", error);
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0">
                        <div
                            className="card-header text-white text-center fw-semibold fs-4"
                            style={{ background: 'linear-gradient(90deg, #0d6efd, #6610f2)' }}
                        >
                            Add New Employee
                        </div>
                        <div className="card-body p-4">
                            <form>
                                <div className="form-group mb-3">
                                    <label className="fw-semibold mb-1">First Name</label>
                                    <input
                                        type="text"
                                        className={`form-control rounded-3 shadow-sm ${errors.firstName && 'is-invalid'}`}
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
                                    <label className="fw-semibold mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        className={`form-control rounded-3 shadow-sm ${errors.lastName && 'is-invalid'}`}
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
                                <div className="form-group mb-4">
                                    <label className="fw-semibold mb-1">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control rounded-3 shadow-sm ${errors.email && 'is-invalid'}`}
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
                                <button
                                    className="btn btn-success w-100 py-2 fw-semibold shadow-sm rounded-3"
                                    onClick={saveEmployee}
                                >
                                    Save Employee
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeComponent;
