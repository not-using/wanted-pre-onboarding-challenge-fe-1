import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useAuth } from "hooks/auth/useAuth";
import TokenContext from "contexts/TokenContext";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthForm from "../components/auth/AuthForm";
import LinkButton from "components/.commons/LinkButton";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveToken } = useContext(TokenContext);
  const { createUser } = useAuth();

  const onSuccess = (response: any) => {
    saveToken(response.token);
  };

  const signUpMutation = useMutation(() => createUser(email, password), {
    onSuccess,
  });

  return (
    <AuthWrapper>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        mutation={signUpMutation}
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
