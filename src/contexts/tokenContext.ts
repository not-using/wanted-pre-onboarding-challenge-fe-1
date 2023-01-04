import React from "react";

const tokenContext = React.createContext<{
  token: string | null;
  saveToken: (token: string) => void;
  removeToken: () => void;
}>({ token: null, saveToken: () => {}, removeToken: () => {} });

export default tokenContext;
