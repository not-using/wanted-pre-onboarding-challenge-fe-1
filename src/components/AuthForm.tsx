import React, { useState } from "react";
import useAuth from "../hooks/api/useAuth";
import Button from "../components/Button";
import Input from "../components/Input";
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

  const { sendRequest, message } = useAuth();
  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendRequest(isSignIn, authInfo);
  };

  return (
    <form className="auth-form__wrapper">
      <Input value={authInfo.email} onChange={setEmail} />
      <Input value={authInfo.password} onChange={setPassword} />
      {message?.length > 0 ? <p>{message}</p> : null}
      <Button
        type="submit"
        value={isSignIn ? "로그인" : "회원가입"}
        isFilled={isSignIn}
        onClick={onClickSubmit}
      />
    </form>
  );
};

export default AuthForm;
