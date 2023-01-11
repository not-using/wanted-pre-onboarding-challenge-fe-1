import React, { useContext } from "react";
import tokenContext from "contexts/tokenContext";
import Button from "components/Button";
import LinkButton from "components/LinkButton";

const LoginButton = () => {
  const { token, removeToken } = useContext(tokenContext);

  if (token === null)
    return <LinkButton color="secondary" value="로그인" path="auth" />;
  return <Button color="secondary" value={"로그아웃"} onClick={removeToken} />;
};

export default LoginButton;
