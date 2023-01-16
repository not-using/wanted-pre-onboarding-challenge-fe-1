import React, { useState } from "react";
import { useAuth } from "hooks/auth/useAuth";
import { useMutate } from "hooks/.commons/useMutate";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthForm from "../components/auth/AuthForm";
import LinkButton from "components/.commons/LinkButton";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, onSuccessToAuth } = useAuth();

  const { mutate } = useMutate(
    () => createUser(email, password),
    onSuccessToAuth
  );

  return (
    <AuthWrapper>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        mutateFunction={() => mutate()}
        submitButtonValue="회원가입"
      />
      <LinkButton
        className="auth-page__signup-button"
        path="/signup"
        value="회원가입"
      />
    </AuthWrapper>
  );
};

export default SignUpPage;
