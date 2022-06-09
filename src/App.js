import "./styles.css";
import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(0);

  function add() {
    setValor(valor - 1);
  }
  return (
    <div className="App">
      <h1>{valor}</h1>

      <button onClick={add}>restar</button>
    </div>
  );
}
