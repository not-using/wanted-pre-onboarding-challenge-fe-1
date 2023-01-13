import { useLocation } from "react-router-dom";

export const usePath = () => {
  const location = useLocation();
  return location.pathname;
};
