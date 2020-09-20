// component to show each item, in this case a country and its property.

import React from "react";

const Item = (props) => {
  return (
    <React.Fragment>
      <h2>{props.countryData.country}</h2>
      <p>Cases: {props.countryData.cases}</p>
    </React.Fragment>
  );
};

export default Item;
