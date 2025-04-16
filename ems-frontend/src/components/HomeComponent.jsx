import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaPlusCircle, FaEdit, FaTrash } from 'react-icons/fa';

const HomeComponent = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '40px 20px',
    },
    header: {
      fontSize: '38px',
      fontWeight: '700',
      color: '#333',
      marginBottom: '10px',
    },
    subHeader: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '30px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      padding: '12px 28px',
      border: 'none',
      borderRadius: '25px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
      transition: 'transform 0.2s ease-in-out',
      marginBottom: '50px',
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '20px',
    },
    featureSection: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
      maxWidth: '1200px',
      width: '100%',
    },
    featureCard: {
      background: '#ffffff',
      borderRadius: '15px',
      padding: '25px',
      flex: '1 1 260px',
      textAlign: 'center',
      boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
    },
    featureIcon: {
      fontSize: '40px',
      color: '#007bff',
      marginBottom: '10px',
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '8px',
    },
    featureDesc: {
      fontSize: '15px',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        Welcome to <span style={{ color: '#007bff' }}>Employee Management System</span>
      </h1>
      <p style={styles.subHeader}>
        Easily manage employees, streamline operations, and boost productivity.
      </p>
      <button style={styles.button} onClick={() => navigate('/employees')}>View Employees</button>

      <p style={styles.sectionTitle}>Facilities We Offer</p>

      <div style={styles.featureSection}>
        <div style={styles.featureCard} onClick={() => navigate('/employees')}>
          <FaUsers style={styles.featureIcon} />
          <h3 style={styles.featureTitle}>View All Employees</h3>
          <p style={styles.featureDesc}>
            Get a clean and organized view of all employee details in one place.
          </p>
        </div>

        <div style={styles.featureCard} onClick={() => navigate('/add-employee')}>
          <FaPlusCircle style={styles.featureIcon} />
          <h3 style={styles.featureTitle}>Add New Employees</h3>
          <p style={styles.featureDesc}>
            Easily onboard new team members with just a few clicks.
          </p>
        </div>

        <div style={styles.featureCard} onClick={() => navigate('/employees')}>
          <FaEdit style={styles.featureIcon} />
          <h3 style={styles.featureTitle}>Update Records</h3>
          <p style={styles.featureDesc}>
            Edit or delete employee data efficiently and accurately.
          </p>
        </div>

        <div style={styles.featureCard} onClick={() => navigate('/employees')}>
          <FaTrash style={styles.featureIcon} />
          <h3 style={styles.featureTitle}>Delete Records</h3>
          <p style={styles.featureDesc}>
            Permanently remove employee records safely and quickly when needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
