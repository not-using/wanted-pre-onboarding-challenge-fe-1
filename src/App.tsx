import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "constants/queryClient";
import Router from "routes/Router";
import TokenProvider from "contexts/TokenProvider";
import ErrorBoundary from "components/.error/ErrorBoundary";
import DefaultFallback from "components/.error/DefaultFallback";

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<DefaultFallback />}>
            <Router />
          </ErrorBoundary>
        </QueryClientProvider>
      </TokenProvider>
    </BrowserRouter>
  );
};

export default App;
