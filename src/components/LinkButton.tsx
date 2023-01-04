import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/LinkButton.css";

interface linkButtonProps {
  className?: string;
  path: string;
  value: string;
  isFilled?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  icon?: React.ReactNode;
}

const LinkButton = ({
  className,
  path,
  value,
  isFilled = false,
  color = "primary",
  icon,
}: linkButtonProps) => {
  return (
    <Link
      className={`${className ?? ""} button__wrapper ${color} ${
        isFilled ? "fill" : "stroke"
      }`}
      to={path}
    >
      {icon}
      <span>{value}</span>
    </Link>
  );
};

export default LinkButton;
