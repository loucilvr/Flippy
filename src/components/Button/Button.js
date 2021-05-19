import React from "react";
import "./Button.css";

const Button = ({ children, handleClick, variant }) => (
  <button
    onClick={handleClick}
    className={variant === "primary" ? "primary" : "secondary"}
  >
    {children}
  </button>
);

export default Button;
