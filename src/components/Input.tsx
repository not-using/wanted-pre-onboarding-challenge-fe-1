import React from "react";
import "../assets/css/Input.css";

interface inputProps {
  className?: string;
  placeholder?: string;
  value: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  type?: string;
  onChange: (value: string) => void;
  patternErrorMessage?: string;
  autoComplete?: string;
  required?: boolean;
  validateRequired?: boolean;
  isValid?: boolean;
  disabled?: boolean;
}

const Input = ({
  className,
  placeholder,
  minLength,
  maxLength,
  pattern,
  type = "text",
  value,
  onChange,
  patternErrorMessage = "",
  validateRequired = false,
  autoComplete,
  required = false,
  disabled = false,
}: inputProps) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    onChange(target.value);
    if (validateRequired) {
      const customMessage = target.validity.patternMismatch
        ? patternErrorMessage
        : "";
      target.setCustomValidity(customMessage);
      target.reportValidity();
    }
  };

  return (
    <input
      className={`input__wrapper ${className ?? ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
      autoComplete={autoComplete}
      disabled={disabled}
    />
  );
};

export default Input;
