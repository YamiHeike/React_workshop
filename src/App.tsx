//Import { Text } from "./ui/Text/Text" works as intended, why doesn't it get indirect index though?

//import { Button, Header, Text, Select } from "./ui";
import "./App.css";
//import { Dynamic } from "./components/Dynamic";
import {
  FormWizard,
  /*History,*/
} from "./components";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { AuthContextProvider } from "./components/Auth/AuthContext";

function App() {
  return <>{<FormWizard />}</>;
}

export default App;
