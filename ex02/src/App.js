import React from "react";
const products = [
  {
    id: 1,
    name: "Phone",
    price: "$ 2200",
    colors: ["#29D799", "#252A00", "#FC3799"],
  },

  {
    id: 2,
    name: "Laptop",
    price: "$ 3100",
    colors: ["#F09099", "#D49900", "#395160"],
  },

  {
    id: 3,
    name: "Tablet",
    price: "$ 1200",
    colors: ["#94BA52", "#5C3413", "#060500"],
  },
];

const App = () => {
  const prod1500Greater = products.filter(
    (el) => Number(el.price.replace("$ ", "")) > 1500
  );

  return (
    <section>
      {prod1500Greater.map((prod) => {
        return (
          <div key={prod.id}>
            <h1>{prod.name}</h1>
            <p>Price: {prod.price}</p>
            <ul>
              {prod.colors.map((c) => (
                <li key={c} style={{ backgroundColor: c, color: "white" }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};
export default App;
