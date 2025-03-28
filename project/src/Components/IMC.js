import { useState } from "react";

const IMC = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <div>
      <p>Altura:</p>
      <input
        type="number"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <p>Peso:</p>
      <input
        type="number"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <p>IMC: {Number(weight) / (Number(height) * Number(height))}</p>
    </div>
  );
};

export default IMC;
