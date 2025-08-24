// Button.jsx
import React from "react";

const Button = ({ name, className = "", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
