import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="m-0 text-center">© 2023 copyright <span style={{ color: "#AF96B0" }}>Sales Media</span> | <Link to="/politique" style={{ color: "white" }}>Politique de Confidentialité </Link> | <Link to="/contact" style={{ color: "white" }}>Conatct</Link></p>
      </div>
    </footer>
  );
}
