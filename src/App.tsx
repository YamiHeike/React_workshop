import "./App.css";
import { ThemeContextProvider, ThemeSwitcher } from "./components/Theme";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CustomerContextProvider, ErrorBoundary } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<p className="dark:slate-300">General Error</p>}>
        <Provider store={store}>
          <ThemeContextProvider>
            <ThemeSwitcher />
            <CustomerContextProvider>
              <RouterProvider router={router}></RouterProvider>
            </CustomerContextProvider>
          </ThemeContextProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
