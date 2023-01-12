import LinkButton from "components/.commons/LinkButton";
import TokenContext from "contexts/TokenContext";
import { useAuth } from "hooks/auth/useAuth";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import AuthForm from "./AuthForm";

const SignUp = () => {
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
    <>
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
    </>
  );
};

export default SignUp;
