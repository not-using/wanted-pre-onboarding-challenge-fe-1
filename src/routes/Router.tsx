import React from "react";
import { Routes, Route } from "react-router-dom";
import TokenRequired from "routes/TokenRequired";
import TokenDisallowed from "routes/TokenDisallowed";
import Header from "components/.header";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import TodoWelcomePage from "pages/TodoWelcomePage";
import TodoDetailPage from "pages/TodoDetailPage";
import TodoCreatePage from "pages/TodoCreatePage";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<TokenDisallowed />}>
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignUpPage />} />
        </Route>
        <Route element={<TokenRequired />}>
          <Route path="/" element={<TodoWelcomePage />} />
          <Route path="/create" element={<TodoCreatePage />} />
          <Route path="*" element={<TodoDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
