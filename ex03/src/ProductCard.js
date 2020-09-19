import React from "react";

/* REMOVE
const products = [
    { name: "Laptop", spaceAvailable: ["32gb memory", "512 gigas"] },
    { name: "Phone", spaceAvailable: ["8gb memory", "256 gigas"] },
  ];*/

const ProductCard = (props) => {
  return (
    <div
      className="product-card"
      style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
    >
      <h2>{props.obj.name}</h2>
      <ul>
        {props.obj.spaceAvailable.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
