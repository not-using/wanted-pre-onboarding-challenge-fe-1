import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenProvider from "./contexts/TokenProvider";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import TodoPageRoute from "./pages/TodoPageRoute";
import TodoWelcomePage from "./pages/TodoWelcomePage";
import TodoDetailPage from "./pages/TodoDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Header />
        <Routes>
          <Route path="/signin" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route element={<TodoPageRoute />}>
            <Route path="/" element={<TodoWelcomePage />} />
            <Route path="/:id" element={<TodoDetailPage />} />
          </Route>
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
};

export default App;
