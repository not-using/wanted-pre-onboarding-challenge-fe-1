import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePath from "hooks/usePath";
import LogoTitle from "components/LogoTitle";
import AuthForm from "components/AuthForm";
import LinkButton from "components/LinkButton";
import tokenContext from "contexts/tokenContext";
import "assets/css/AuthPage.css";

const AuthPage = () => {
  const path = usePath();
  const { token } = useContext(tokenContext);
  const navigate = useNavigate();
  const isSignIn = path === "/auth";

  useEffect(() => {
    if (token !== null) navigate("/");
  }, [navigate, token]);

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
