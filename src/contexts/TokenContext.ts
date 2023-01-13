import React from "react";

const TokenContext = React.createContext<{
  token: string | null;
  saveToken: (token: string) => void;
  removeToken: () => void;
}>({ token: null, saveToken: () => {}, removeToken: () => {} });

export default TokenContext;
