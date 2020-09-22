import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function cleanData() {
    setData(null);
  }

  return (
    <GlobalContext.Provider value={{ data, cleanData }}>
      {children}
    </GlobalContext.Provider>
  );
};
