import { useState } from "react";

const ToMiles = () => {
  const [kilometers, setKilometers] = useState(0);

  return (
    <div>
      <p>Km:</p>
      <input
        type="number"
        value={kilometers}
        onChange={(e) => {
          setKilometers(e.target.value);
        }}
      />
      <p>Milhas: {kilometers * 0.621371}</p>
    </div>
  );
};


export default ToMiles;