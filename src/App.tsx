import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenProvider from "contexts/TokenProvider";
import Header from "components/.header";
import AuthPage from "components/auth";
import TodoPage from "components/todo";

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
