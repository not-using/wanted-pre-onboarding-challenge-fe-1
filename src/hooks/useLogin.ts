import { useEffect, useState } from "react";

const useLogin = () => {
  const [loginToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenInStorage = window.localStorage.getItem("token");
    setToken(tokenInStorage);
  }, []);

  const isLogged = loginToken !== null;

  const login = () => {
    setToken("temp");
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setToken(null);
  };

  return { isLogged, login, logout };
};

export default useLogin;
