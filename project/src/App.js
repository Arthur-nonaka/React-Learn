import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    alert("Clicou");
  };

  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="main">
      <h2>Teste</h2>
      <div>
        {counter}
      </div>

      <Button text={"Clique"} onClick={increment} />
    </div>
  );
}

export default App;
