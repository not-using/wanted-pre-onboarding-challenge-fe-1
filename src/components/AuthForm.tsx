import React, { useEffect, useState } from "react";
import useAuth from "../hooks/api/useAuth";
import Button from "../components/Button";
import Input from "../components/Input";
import { emailRegex, passwordRegex } from "../policys/AuthRegex";
import "../assets/css/AuthForm.css";

interface authFormProps {
  isSignIn: boolean;
}

const AuthForm = ({ isSignIn }: authFormProps) => {
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });

  const setEmail = (email: string) => {
    setAuthInfo({ ...authInfo, email });
  };
  const setPassword = (password: string) => {
    setAuthInfo({ ...authInfo, password });
  };

  const { sendRequest, message, setMessage } = useAuth();
  const isEmailValid = RegExp(emailRegex).test(authInfo.email);
  const isPasswordValid = RegExp(passwordRegex).test(authInfo.password);

  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendRequest(isSignIn, authInfo);
  };

  useEffect(() => {
    let validMessage = "";
    if (
      (authInfo.email.length > 0 || authInfo.password.length > 0) &&
      !(isEmailValid && isPasswordValid)
    )
      validMessage = "이메일 혹은 비밀번호를 확인해주세요";

    setMessage(validMessage);
  }, [authInfo, isEmailValid, isPasswordValid, setMessage]);

  useEffect(() => {
    setMessage("");
  }, [isSignIn, setMessage]);

  return (
    <form className="auth-form__wrapper">
      <Input
        value={authInfo.email}
        onChange={setEmail}
        placeholder="이메일을 입력해주세요"
        required
        pattern={emailRegex.source}
      />
      <Input
        value={authInfo.password}
        onChange={setPassword}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        minLength={8}
        required
      />
      <p className="auth-form__message">{message}</p>
      <Button
        className="auth-form__submit-button"
        type="submit"
        value={isSignIn ? "로그인" : "회원가입"}
        isFilled={true}
        onClick={onClickSubmit}
        disabled={!isEmailValid || !isPasswordValid || message?.length > 0}
      />
    </form>
  );
};

export default AuthForm;
