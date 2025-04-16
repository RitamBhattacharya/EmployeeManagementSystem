import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const HeaderComponent = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      >
        <div className="container d-flex justify-content-center py-3">
          <a
            href="#"
            className="navbar-brand d-flex align-items-center gap-3"
            style={{ textDecoration: 'none' }}
          >
            <FaUserTie size={32} color="#ffffff" />
            <span
              className="fw-bold"
              style={{
                fontSize: '1.8rem',
                background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1px',
              }}
            >
              Employee Management System
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
