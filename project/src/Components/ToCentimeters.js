import { useState } from "react";

const ToCentimeters = () => {
  const [meters, setMeters] = useState(0);

  return (
    <div>
      <p>Metros:</p>
      <input
        type="number"
        value={meters}
        onChange={(e) => {
          setMeters(e.target.value);
        }}
      />
      <p>Centimetros: {meters * 100}</p>
    </div>
  );
};


export default ToCentimeters;