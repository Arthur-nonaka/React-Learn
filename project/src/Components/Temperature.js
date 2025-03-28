import { useState } from "react";

const Temperature = () => {
  const [celcius, setCelcius] = useState(0);
  const [farenheit, setFarenheit] = useState(0);

  return (
    <div>
      <p>Celcius:</p>
      <input
        type="number"
        value={celcius}
        onChange={(e) => {
          setCelcius(e.target.value);
          setFarenheit((e.target.value * 9) / 5 + 32);
        }}
      />
      <p>Farenheit:</p>
      <input
        type="number"
        value={farenheit}
        onChange={(e) => {
          setFarenheit(e.target.value);
          setCelcius(((e.target.value - 32) * 5) / 9);
        }}
      />
    </div>
  );
};

export default Temperature;
