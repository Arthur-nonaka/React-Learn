import { useState } from "react";

const PerimeterCircle = () => {
  const [radius, setRadius] = useState('');

  return (
    <div>
      <p>Raio:</p>
      <input
        type="number"
        value={radius}
        onChange={(e) => {
          setRadius(e.target.value);
        }}
      />
      <p>Perimetro: {Number(radius) * 2 * Math.PI}</p>
    </div>
  );
};

export default PerimeterCircle;
