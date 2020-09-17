import React from "react";

const luccas = {
  name: "Luccas Brummer",
  age: 25,
  cart: [
    { itemName: "Laptop", price: "$ 2000" },
    { itemName: "Desktop", price: "$ 1000" },
    { itemName: "Monitor", price: "$ 500" },
    { itemName: "TV", price: "$ 1500" },
  ],
  active: true,
};

const linda = {
  name: "Linda Schneider",
  age: 33,
  cart: [
    { itemName: "Laptop", price: "$ 3000" },
    { itemName: "Desktop", price: "$ 2000" },
    { itemName: "Monitor", price: "$ 1500" },
    { itemName: "TV", price: "$ 2500" },
    { itemName: "Phone", price: "$ 2500" },
  ],
  active: false,
};

const App = () => {
  // main Object to be displayed;
  const data = luccas;

  // function to sum all the cart values.
  const totalPrice = (obj) => {
    let total = 0;
    obj.cart.forEach((item) => {
      total += Number(item.price.replace("$ ", ""));
    });
    return total;
  };

  // function to check if the amount is greater than 10000.
  const checkAmount = (obj) => {
    if (totalPrice(obj) > 10000) {
      return <p>Warning! Your spendings are too high.</p>;
    } else {
      return null;
    }
  };

  // main html to be shown.
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>
        Status:{" "}
        <span style={data.active ? { color: "green" } : { color: "red" }}>
          {data.active ? "Active" : "Inactive"}
        </span>
      </p>
      <p>Total Amount: {totalPrice(data)}</p>
      {checkAmount(data)}
    </div>
  );
};
export default App;
