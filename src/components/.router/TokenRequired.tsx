import React from "react";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TokenContext from "contexts/TokenContext";

const TokenRequired = () => {
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/auth");
    }
  }, [navigate, token]);

  return <Outlet />;
};

export default TokenRequired;
