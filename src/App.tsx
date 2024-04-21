//Import { Text } from "./ui/Text/Text" works as intended, why doesn't it get indirect index though?

import { Button, Header, Text } from "./ui";
import "./App.css";

function App() {
  return (
    <>
      <Header className="text-5xl my-2">
        React + Vite + TailwindCss Playground
      </Header>
      <Text>Hi there, pick a button! They're all very fun!</Text>
      <Button
        label="Keep calm and carpe diem!"
        onClick={() => {
          alert("Always look at the bright side of life!");
        }}
      />
      <Button
        label="SHUT UP AND TAKE MY MONEY!!!"
        onClick={() => {
          alert("You shall not pass!!!");
        }}
        className=" bg-red-700 text-sm border-red-200 hover:bg-red-600"
      />
      <Button
        label="#SpreadLove"
        onClick={() => {
          alert("Peace");
        }}
        className=" bg-green-500 border-green-900 font-thin hover:bg-green-300 hover:text-black"
      />
    </>
  );
}

export default App;
