import React, { useContext, useEffect } from "react";
import usePath from "../hooks/usePath";
import LogoTitle from "../components/LogoTitle";
import AuthForm from "../components/AuthForm";
import LinkButton from "../components/LinkButton";
import "../assets/css/AuthPage.css";
import tokenContext from "../contexts/tokenContext";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const path = usePath();
  const { token } = useContext(tokenContext);
  const navigate = useNavigate();
  const isSignIn = path === "/signin";

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
