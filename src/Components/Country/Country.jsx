import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, region, population, flags, unMember, independent } = props.name;
  return (
    
      <div className="card">
        <h2>{name.common}</h2>
        <img src={flags.png} alt="" />
        <p className="lead">
          <strong>Population: </strong>
          {population}
        </p>
        <p className="lead">
          <strong>Region: </strong>
          {region}
        </p>
        <p className="lead">
          <strong>Independent: </strong>
          {independent ? "🤴🏻" : "🚫"}
        </p>
        <p className="lead">
          <strong>UN: </strong>
          {unMember ? "✅" : "❌"}
        </p>
      </div>
  );
};

export default Country;
