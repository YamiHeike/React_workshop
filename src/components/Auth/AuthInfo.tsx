import { AuthCredentials } from "./AuthCredentials";
import { Text } from "../../ui";

export const AuthInfo = () => {
  return (
    <div>
      <Text className="text-5xl my-2">User Info</Text>
      <AuthCredentials />
    </div>
  );
};
