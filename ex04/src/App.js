import React from "react";
import Item from "./Item";

const App = () => {
  // Hook to check loading and for after the data is acquired.
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // Function activated if a button is clicked to fetch to API for data.
  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://coronavirus-19-api.herokuapp.com/countries/${event.target.innerText}`
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setData(jsonResponse);
    setLoading(false);
  }

  // Main interface of the system to show buttons and call Item component after loaded.
  return (
    <React.Fragment>
      <button onClick={handleClick}> World </button>
      <button onClick={handleClick}> USA </button>
      <button onClick={handleClick}> UK </button>

      <div>{!loading && data && <Item countryData={data} />}</div>
      <div>{loading && "Loading..."}</div>
    </React.Fragment>
  );
};
export default App;
