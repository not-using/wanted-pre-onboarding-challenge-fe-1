import React from "react";
import "assets/css/Textarea.css";

interface textareaProps {
  className?: string;
  placeholder?: string;
  value: string;
  labelText?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  onChange: (value: string) => void;
  patternErrorMessage?: string;
  autoComplete?: string;
  required?: boolean;
  validateRequired?: boolean;
  isValid?: boolean;
  disabled?: boolean;
}
const Textarea = ({
  className,
  placeholder,
  minLength,
  maxLength,
  value,
  onChange,
  required = false,
  disabled = false,
}: textareaProps) => {
  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    onChange(value);
  };
  return (
    <textarea
      className={`textarea__wrapper ${className ?? ""}`}
      value={value}
      onChange={onChangeTextarea}
      placeholder={placeholder}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      disabled={disabled}
    ></textarea>
  );
};

export default Textarea;
