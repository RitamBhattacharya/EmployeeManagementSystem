import React from 'react';

const FooterComponent = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(90deg, #2575fc, #6a11cb)',
        color: '#ffffff',
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto',
        boxShadow: '0 -8px 16px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        letterSpacing: '0.5px',
      }}
    >
      <div className="container">
        <p
          style={{
            margin: 0,
            fontSize: '16px',
            transition: 'color 0.3s ease',
          }}
        >
          © 2025 All rights reserved by{' '}
          <strong
            style={{
              background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ritam Bhattacharya
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
