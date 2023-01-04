import React from "react";
import usePath from "../hooks/usePath";
import LogoTitle from "../components/LogoTitle";
import AuthForm from "../components/AuthForm";
import LinkButton from "../components/LinkButton";
import "../assets/css/AuthPage.css";

const AuthPage = () => {
  const path = usePath();
  const isSignIn = path === "/signin";

  return (
    <main className="auth-page__wrapper">
      <LogoTitle />
      <AuthForm isSignIn={isSignIn} />
      {isSignIn ? <LinkButton path="/signup" value="회원가입" /> : null}
    </main>
  );
};

export default AuthPage;
