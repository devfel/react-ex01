import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const App = () => {
  const [country, setCountry] = useLocalStorage("country", "");
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setCountry(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  if (data)
    return (
      <div>
        <p>Country Saved Locally: {country}</p>
        <button onClick={handleClick}>USA</button>
        <button onClick={handleClick}>UK</button>

        {data.map((elem) => (
          <div key={elem.country}>
            <div>{elem.country}</div>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
