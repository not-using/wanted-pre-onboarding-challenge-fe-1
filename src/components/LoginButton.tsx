import React from "react";
import useLogin from "../hooks/useLogin";
import Button from "./Button";
import LinkButton from "./LinkButton";

const LoginButton = () => {
  const { isLogged, logout } = useLogin();

  if (!isLogged)
    return <LinkButton color="secondary" value="로그인" path="signin" />;
  return <Button color="secondary" value={"로그아웃"} onClick={logout} />;
};

export default LoginButton;
