import { useState } from "react";

const Perimeter = () => {
  const [widht, setWidht] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div>
      <p>Largura:</p>
      <input
        type="number"
        value={widht}
        onChange={(e) => {
          setWidht(e.target.value);
        }}
      />
      <p>Altura:</p>
      <input
        type="number"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <p>Perimetro: {widht * 2 + height * 2}</p>
    </div>
  );
};

export default Perimeter;
