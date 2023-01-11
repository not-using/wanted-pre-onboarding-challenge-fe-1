import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenProvider from "contexts/TokenProvider";
import Header from "components/Header";
import AuthPage from "pages/AuthPage";
import TodoPage from "pages/TodoPage";

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Header />
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="*" element={<TodoPage />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
};

export default App;
