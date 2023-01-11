import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "constants/queryClient";
import TokenProvider from "contexts/TokenProvider";
import Header from "components/.header";
import AuthPage from "components/auth";
import TodoPage from "components/todo";

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TokenProvider>
          <Header />
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
            <Route path="*" element={<TodoPage />} />
          </Routes>
        </TokenProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
