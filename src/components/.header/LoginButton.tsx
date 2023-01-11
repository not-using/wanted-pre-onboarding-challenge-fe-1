import { useContext } from "react";
import TokenContext from "contexts/TokenContext";
import Button from "components/.commons/Button";
import LinkButton from "components/.commons/LinkButton";

const LoginButton = () => {
  const { token, removeToken } = useContext(TokenContext);

  if (token === null)
    return <LinkButton color="secondary" value="로그인" path="auth" />;
  return <Button color="secondary" value={"로그아웃"} onClick={removeToken} />;
};

export default LoginButton;
