import React from "react";

interface inputProps {
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
  required?: boolean;
  isValid?: boolean;
}

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  required = false,
}: inputProps) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChange(value);
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
    />
  );
};

export default Input;
