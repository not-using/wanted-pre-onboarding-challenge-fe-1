import React, { useEffect, useState } from "react";
import { UseMutationResult } from "react-query";
import { emailRegex, passwordRegex } from "constants/authRegex";
import Button from "components/.commons/Button";
import Input from "components/.commons/Input";
import "assets/css/AuthForm.css";

interface authFormProps {
  email: string;
  setEmail: (newEmail: string) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  mutation: UseMutationResult<any, unknown, void, unknown>;
  submitButtonValue: string;
}

const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  mutation,
  submitButtonValue,
}: authFormProps) => {
  const [message, setMessage] = useState("");

  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  const isEmailValid = RegExp(emailRegex).test(email);
  const isPasswordValid = RegExp(passwordRegex).test(password);

  useEffect(() => {
    let validMessage = "";
    if (
      (email.length > 0 || password.length > 0) &&
      !(isEmailValid && isPasswordValid)
    )
      validMessage = "이메일 혹은 비밀번호를 확인해주세요";

    setMessage(validMessage);
  }, [
    email.length,
    isEmailValid,
    isPasswordValid,
    password.length,
    setMessage,
  ]);

  return (
    <form className="auth-form__wrapper">
      <Input
        value={email}
        onChange={setEmail}
        placeholder="이메일을 입력해주세요"
        required
        validateRequired
        autoComplete="email"
        pattern={emailRegex.source}
        patternErrorMessage="최소 @와 .로 구분되는 입력값이어야 합니다 이메일을 입력해주세요"
      />
      <Input
        value={password}
        onChange={setPassword}
        type="password"
        autoComplete="password"
        placeholder="비밀번호를 입력해주세요"
        minLength={8}
        required
        validateRequired
      />
      <p className="auth-form__message">{message}</p>
      <Button
        className="auth-form__submit-button"
        type="submit"
        value={submitButtonValue}
        isFilled={true}
        onClick={onClickSubmit}
        disabled={!isEmailValid || !isPasswordValid || message?.length > 0}
      />
    </form>
  );
};

export default AuthForm;
