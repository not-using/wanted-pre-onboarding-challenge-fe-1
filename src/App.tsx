import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenProvider from "./contexts/TokenProvider";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import TodoPageRoute from "./pages/TodoPage";

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Header />
        <Routes>
          <Route path="/signin" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="*" element={<TodoPageRoute />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
};

export default App;
