import { useState } from "react";

const FeesComplex = () => {
  const [capital, setCapital] = useState("");
  const [tax, setTax] = useState("");
  const [time, setTime] = useState("");

  return (
    <div>
      <p>Capital:</p>
      <input
        type="number"
        value={capital}
        onChange={(e) => {
          setCapital(e.target.value);
        }}
      />
      <p>Taxa:</p>
      <input
        type="number"
        value={tax}
        onChange={(e) => {
          setTax(e.target.value);
        }}
      />
      <p>Periodo:</p>
      <input
        type="number"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <p>Juros Composto: {capital * ((1+tax) ** time)}</p>
    </div>
  );
};

export default FeesComplex;
