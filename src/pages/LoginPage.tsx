import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useAuth } from "hooks/auth/useAuth";
import TokenContext from "contexts/TokenContext";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
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
    <AuthWrapper>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        mutation={loginMutation}
        submitButtonValue="로그인"
      />
    </AuthWrapper>
  );
};

export default LoginPage;
