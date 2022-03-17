import { useEffect, useState } from "react";
import "./App.css";

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
    <div>
      <h4>Country: {country.length}</h4>
      {
        country.map(state => console.log(state))
      }
    </div>
  )
};

// Draft.........
const Comp = (props) => {
  return <p className="lead">This is a {props.attr} Component</p>;
};

export default App;
