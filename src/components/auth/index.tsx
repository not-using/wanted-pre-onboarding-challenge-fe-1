import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePath from "hooks/.commons/usePath";
import LogoTitle from "components/.commons/LogoTitle";
import LinkButton from "components/.commons/LinkButton";
import AuthForm from "components/auth/AuthForm";
import TokenContext from "contexts/TokenContext";
import "assets/css/AuthPage.css";

const AuthPage = () => {
  const path = usePath();
  const { token } = useContext(TokenContext);
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
