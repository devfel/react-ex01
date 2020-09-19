// Card component to show each item or product

import React from "react";

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
