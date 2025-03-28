import { useState } from "react";

const Exponent = () => {
  const [base, setBase] = useState(0);
  const [exponent, setExponent] = useState(0);

  return (
    <div>
      <p>Base:</p>
      <input
        type="number"
        value={base}
        onChange={(e) => {
          setBase(e.target.value);
        }}
      />
      <p>Exponent:</p>
      <input
        type="number"
        value={exponent}
        onChange={(e) => {
          setExponent(e.target.value);
        }}
      />
      <p>Result: {base ** exponent}</p>
    </div>
  );
};

export default Exponent;
