import { type MouseEventHandler } from "react";
import { useAuthContext } from "./AuthContext";
import { Button, Text } from "../../ui";

export const AuthCredentials = () => {
  let { isLoggedIn, toggleValue, logIn, logOut } = useAuthContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    toggleValue();
  };

  return (
    <div>
      <Text className="font-thin">
        Is user logged in? {isLoggedIn ? "YES" : "NO"}
      </Text>
      <Button onClick={handleClick} label="Toggle" />
      <Button onClick={logIn} label="Log In" />
      <Button onClick={logOut} label="Log out" />
    </div>
  );
};
