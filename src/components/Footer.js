// src/components/Footer.js
import React from 'react';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer"> {/* Footer section */}
    <p>&copy; {new Date().getFullYear()} Salim Saay. All Rights Reserved.</p> {/* Dynamic copyright year */}
  </footer>
  );
};

export default Footer;
