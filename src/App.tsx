import "./App.css";
import { ThemeContextProvider, ThemeSwitcher } from "./components/Theme";
import { /*AuthContextProvider, AuthInfo,*/ Stepper } from "./components";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeSwitcher />
        <RouterProvider router={router}></RouterProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
