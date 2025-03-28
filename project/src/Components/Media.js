import { useState } from "react";

const Media = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <input
        type="number"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <p>{(Number(value1) + Number(value2) + Number(value3)) / 3}</p>
    </div>
  );
};

export default Media;
