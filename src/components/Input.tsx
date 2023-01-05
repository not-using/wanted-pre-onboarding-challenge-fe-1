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
  required?: boolean;
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
  required = false,
}: inputProps) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    onChange(target.value);
    const customMessage = target.validity.patternMismatch
      ? "최소 @와 .로 구분되는 입력값이어야 합니다 이메일을 입력해주세요"
      : "";
    target.setCustomValidity(customMessage);
    target.reportValidity();
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
        autoComplete={type === "password" ? "current-password" : undefined}
      />
    </label>
  );
};

export default Input;
