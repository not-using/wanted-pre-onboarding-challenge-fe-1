import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import TokenContext from "contexts/TokenContext";

const TokenRequired = () => {
  const { token } = useContext(TokenContext);

  if (token === null) {
    return <Navigate to="/auth" />;
  }
  return <Outlet />;
};

export default TokenRequired;
