import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Crad";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Manoj",
    age: 23,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="Talsaniya" btnText="click me" />
      <Card username="Manoj" />
    </>
  );
}

export default App;
