import { useState } from "react";

const Area = () => {
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
      <p>Area: {widht * height}</p>
    </div>
  );
};

export default Area;