import "./App.css";
import { ThemeContextProvider, ThemeSwitcher } from "./components/Theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CustomerContextProvider, ErrorBoundary } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ErrorBoundary fallback={<p className="dark:slate-300">General Error</p>}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <ThemeContextProvider>
              <ThemeSwitcher />
              <CustomerContextProvider>
                <RouterProvider router={router}></RouterProvider>
              </CustomerContextProvider>
            </ThemeContextProvider>
          </Provider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
