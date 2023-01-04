import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenProvider from "./contexts/TokenProvider";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signin" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
};

export default App;
