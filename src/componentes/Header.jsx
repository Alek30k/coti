import React from "react";
import { Link } from "react-router-dom";

const Header = ({ titulo }) => {
  return (
    <div className="header">
      <h1>{titulo}</h1>
      <div className="historial-link">
        <Link to="/historial">Ver Historial</Link>
      </div>
    </div>
  );
};

export default Header;
