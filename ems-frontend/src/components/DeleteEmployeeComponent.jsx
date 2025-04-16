import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteEmployee } from '../services/EmployeeService';
import { toast } from 'react-toastify';

const DeleteEmployeeComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            deleteEmployee(id)
                .then((response) => {
                    console.log(response.data);
                    navigate('/employees');
                    toast.success("Employee deleted successfully!");

                })
                .catch((error) => {
                    console.error("Error deleting employee:", error);
                });
        }
    }, [id, navigate]);

    return (
        <div className="container mt-5">
            <h4 className="text-center">Deleting Employee...</h4>
        </div>
    );
};

export default DeleteEmployeeComponent;
