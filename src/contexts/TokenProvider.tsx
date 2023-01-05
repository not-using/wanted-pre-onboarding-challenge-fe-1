import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import tokenContext from "./tokenContext";

interface tokenProviderProps {
  children: React.ReactNode;
}

const TokenProvider = ({ children }: tokenProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const tokenInStorage = window.localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    setToken(tokenInStorage);
  }, [tokenInStorage]);

  const saveToken = useCallback(
    (token: string) => {
      window.localStorage.setItem("token", token);
      setToken(token);
      navigate("/");
    },
    [navigate]
  );

  const removeToken = useCallback(() => {
    window.localStorage.removeItem("token");
    setToken(null);
    navigate("/auth");
  }, [navigate]);

  return (
    <tokenContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </tokenContext.Provider>
  );
};

export default TokenProvider;
