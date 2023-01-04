import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenProvider from "./contexts/TokenProvider";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
};

export default App;
