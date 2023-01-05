import React from "react";

interface inputProps {
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
  placeholder,
  labelText,
  minLength,
  maxLength,
  pattern,
  type,
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
    <label>
      {labelText}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
    </label>
  );
};

export default Input;
