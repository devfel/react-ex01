import React from "react";
import { GlobalContext } from "./GlobalContext";

const Item = () => {
  const { data } = React.useContext(GlobalContext);
  if (data === null) return null;
  return (
    <div>
      Cases per Country:
      {data.map((item) => (
        <li key={item.country}>
          {item.country} - {item.cases}{" "}
        </li>
      ))}
    </div>
  );
};

export default Item;
