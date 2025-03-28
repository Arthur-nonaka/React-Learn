import { useState } from "react";

const AreaCircle = () => {
  const [radius, setRadius] = useState(0);

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
      <p>Area: {Math.PI * radius * radius}</p>
    </div>
  );
};

export default AreaCircle;
