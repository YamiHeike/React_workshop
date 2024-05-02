//Import { Text } from "./ui/Text/Text" works as intended, why doesn't it get indirect index though?

import "./App.css";
import { ThemeContextProvider, ThemeSwitcher } from "./components/Theme";
import { AuthContextProvider, AuthInfo } from "./components";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeSwitcher />
        <AuthContextProvider>
          <AuthInfo />
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
