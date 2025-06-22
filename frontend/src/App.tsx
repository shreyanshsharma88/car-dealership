import { Render } from "./Components";
import { AppThemeProvider } from "./Providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalProvider } from "./Providers/GlobalProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      retry: false,
    },
  },
});
function App() {
  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <Render />
        </GlobalProvider>
      </QueryClientProvider>
    </AppThemeProvider>
  );
}

export default App;
