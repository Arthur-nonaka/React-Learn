import { useState } from "react";

const ConvertDays = () => {
  const [days, setDays] = useState("");

  return (
    <div>
      <p>Dias: </p>
      <input
        type="number"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />
      <p>Horas: {days * 24}</p>
      <p>Minutos: {days * 24 * 60}</p>
      <p>Segundos: {days * 24 * 60 * 60}</p>
    </div>
  );
};

export default ConvertDays;
