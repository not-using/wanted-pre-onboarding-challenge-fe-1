import React, { useState } from "react";
import { useAuth } from "hooks/auth/useAuth";
import { useMutate } from "hooks/.commons/useMutate";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, onSuccessToAuth } = useAuth();

  const { mutate } = useMutate(() => login(email, password), onSuccessToAuth);

  return (
    <AuthWrapper>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        mutateFunction={() => mutate()}
        submitButtonValue="로그인"
      />
    </AuthWrapper>
  );
};

export default LoginPage;
