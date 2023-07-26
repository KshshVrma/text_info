import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState(0);
  useEffect(() => {
    setTwo(one.length);
  }, [one]);
  const f = (event) => {
    setOne(event.target.value);
  };
  return (
    <div className="App">
      the string is
      <br />
      {one}
      <br />
      and it's size is {two};
      <br />
      <input type="text" onChange={f}></input>
    </div>
  );
}
