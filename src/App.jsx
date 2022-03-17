import { useEffect, useState } from "react";
import "./App.css";
import Country from "./Components/Country/Country";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello React 👋🏻</h1>
        <Comp attr="Super"></Comp>
      </div>

      {/* Project */}
      <div>
        <Countries></Countries>
      </div>
    </div>
  );
}

// Project.....
const Countries = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountry(data));
  }, []);

  return (
    <div >
      <h4>Country: {country.length}</h4>
      <div className="grid">
      {
        country.map(state => <Country name={state}></Country>)
      }
      </div>
    </div>
  )
};

// Draft.........
const Comp = (props) => {
  return <p className="lead">This is a {props.attr} Component</p>;
};

export default App;
