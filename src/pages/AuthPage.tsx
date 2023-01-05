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
      <section className="auth-page__contents">
        <AuthForm isSignIn={isSignIn} />
        {isSignIn ? (
          <LinkButton
            className="auth-page__signup-button"
            path="/signup"
            value="회원가입"
          />
        ) : null}
      </section>
    </main>
  );
};

export default AuthPage;
