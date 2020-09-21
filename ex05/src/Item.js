import React from "react";

const Item = ({ countryName }) => {
  const [itemData, setItemData] = React.useState(null);

  React.useEffect(() => {
    //console.log(countryName);
    /*if (countryName !== null) {
      console.log(
        fetch(
          `https://coronavirus-19-api.herokuapp.com/countries/${countryName}`
        )
          .then((response) => response.json())
          .then((json) => setItemData(json))
      );
    }*/
    if (countryName !== null) {
      fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`)
        .then((response) => response.json())
        .then((json) => setItemData(json));
    }
  }, [countryName]);

  // Null in case there is no loaded file
  if (itemData === null) {
    return null;
  }
  // return for the selected item or the users local storage
  else {
    return (
      <section className="selected-item">
        <h2>{itemData.country}</h2>
        <p>{itemData.cases}</p>
      </section>
    );
  }
};

export default Item;
