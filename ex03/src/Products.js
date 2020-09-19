import React from "react";
import ProductCard from "./ProductCard.js";

const products = [
  { name: "Laptop", spaceAvailable: ["32gb memory", "512 gigas"] },
  { name: "Phone", spaceAvailable: ["8gb memory", "256 gigas"] },
];

const listProducts = () => {
  return products.map((el) => <ProductCard key={el.name} obj={el} />);
};

const Products = () => {
  return (
    <section className="products-section">
      <h1> Products </h1>
      {listProducts()}
    </section>
  );
};

export default Products;
