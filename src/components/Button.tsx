import React from "react";
import "../assets/css/Button.css";

interface buttonProps {
  className?: string;
  isFilled?: boolean;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "tertiary";
  icon?: React.ReactNode;
  value: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  isFilled = false,
  color = "primary",
  className,
  type,
  onClick,
  icon,
  value,
  disabled,
}: buttonProps) => {
  return (
    <button
      className={`${className ?? ""} button__wrapper ${color} ${
        isFilled ? "fill" : "stroke"
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span>{value}</span>
    </button>
  );
};

export default Button;
