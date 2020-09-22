import React from "react";
import Item from "./Item";
import { GlobalStorage } from "./GlobalContext";
import Clean from "./Clean";

const App = () => {
  return (
    <GlobalStorage>
      <Item />
      <Clean />
    </GlobalStorage>
  );
};

export default App;
