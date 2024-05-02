//React Context Hook Pattern

import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  toggleValue: () => void;
  logIn: () => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleValue = () => setIsLoggedIn((val) => !val);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return { isLoggedIn, toggleValue, logIn, logOut };
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(
      "An error has occurred: the component should be used only inside AuthContextProvider"
    );
  } else {
    return context;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};
