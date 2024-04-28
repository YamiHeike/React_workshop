//Import { Text } from "./ui/Text/Text" works as intended, why doesn't it get indirect index though?

import { Button, Header, Text, Select } from "./ui";
import "./App.css";
import { Generator } from "./components/Generator";
import { FormWizard, History } from "./components";

function App() {
  return (
    <>
      <History />
    </>
  );
}

export default App;
