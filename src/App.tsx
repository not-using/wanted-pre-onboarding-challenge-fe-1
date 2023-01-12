import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "constants/queryClient";
import TokenProvider from "contexts/TokenProvider";
import ErrorBoundary from "components/.error/ErrorBoundary";
import TokenRequired from "components/.routes/TokenRequired";
import TokenDisallowed from "components/.routes/TokenDisallowed";
import Header from "components/.header";
import AuthPage from "components/auth";
import TodoPage from "components/todo";

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TokenProvider>
          <ErrorBoundary>
            <Header />
            <Routes>
              <Route element={<TokenDisallowed />}>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/signup" element={<AuthPage />} />
              </Route>
              <Route element={<TokenRequired />}>
                <Route path="*" element={<TodoPage />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </TokenProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
