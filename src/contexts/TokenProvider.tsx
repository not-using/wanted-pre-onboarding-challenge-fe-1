import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import TokenContext from "contexts/TokenContext";
import { queryClient } from "constants/queryClient";

interface tokenProviderProps {
  children: React.ReactNode;
}

const TokenProvider = ({ children }: tokenProviderProps) => {
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  const saveToken = useCallback(
    (token: string) => {
      window.localStorage.setItem("token", token);
      navigate("/");
    },
    [navigate]
  );

  const removeToken = useCallback(() => {
    window.localStorage.removeItem("token");
    queryClient.invalidateQueries();
    navigate("/auth");
  }, [navigate]);

  return (
    <TokenContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
