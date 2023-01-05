import React from "react";
import "../assets/css/Input.css";

interface inputProps {
  className?: string;
  placeholder?: string;
  value: string;
  labelText?: string;
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
}

const Input = ({
  className,
  placeholder,
  labelText,
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
    <label className={`input__wrapper ${className ?? ""}`}>
      {labelText}
      <input
        className="input__input-box"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        autoComplete={autoComplete}
      />
    </label>
  );
};

export default Input;
