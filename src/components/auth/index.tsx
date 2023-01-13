import { Route, Routes } from "react-router-dom";
import Login from "components/auth/Login";
import SignUp from "components/auth/SignUp";
import LogoTitle from "components/.commons/LogoTitle";
import "assets/css/AuthPage.css";

const AuthPage = () => {
  return (
    <main className="auth-page__wrapper">
      <LogoTitle />
      <section className="auth-page__contents">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </section>
    </main>
  );
};

export default AuthPage;
