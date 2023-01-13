import TokenContext from "contexts/TokenContext";
import { useAuth } from "hooks/auth/useAuth";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import AuthForm from "./AuthForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveToken } = useContext(TokenContext);
  const { login } = useAuth();

  const onSuccess = (response: any) => {
    saveToken(response.token);
  };

  const loginMutation = useMutation(() => login(email, password), {
    onSuccess,
  });

  return (
    <AuthForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      mutation={loginMutation}
      submitButtonValue="로그인"
    />
  );
};

export default Login;
