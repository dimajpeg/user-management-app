// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} User Management App</p>
    </footer>
  );
}

export default Footer;