import { useState } from "react";

const Discount = () => {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  return (
    <div>
      <p>Preço:</p>
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <p>Desconto:</p>
      <input
        type="number"
        value={discount}
        onChange={(e) => {
          setDiscount(e.target.value);
        }}
      />
      <p>Preço: {Number(price) - (Number(price) * Number(discount)) / 100}</p>
    </div>
  );
};

export default Discount;
