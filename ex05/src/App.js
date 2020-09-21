import React from "react";
import Item from "./Item";

const App = () => {
  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    const localCountry = window.localStorage.getItem("country");
    if (localCountry !== null) {
      setCountry(localCountry);
    }
  }, []);

  React.useEffect(() => {
    if (country !== null) {
      window.localStorage.setItem("country", country);
    }
  }, [country]);

  function handleClick(event) {
    setCountry(event.target.innerText);
  }

  return (
    <React.Fragment>
      <h1>Preference: {country}</h1>
      <button onClick={handleClick}>USA</button>
      <button onClick={handleClick}>UK</button>
      <Item countryName={country} />
    </React.Fragment>
  );
};
export default App;
